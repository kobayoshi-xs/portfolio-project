class Api::V1::Rakuten::SmallsController < ApplicationController
  def get
    @categories_smalls =  RakutenWebService::Recipe.small_categories
    @categories_smalls.each do |categories_small|
      item = CategoriesSmall.new(read(categories_small))
      unless CategoriesSmall.all.exists?(category_name: item.category_name)
        item.save!
      end
    end
    @item_list = CategoriesSmall.all

    render json: @item_list
  end

  private
    def read(categories_small)
      category_id = categories_small['categoryId']
      category_name = categories_small['categoryName']
      category_url = categories_small['categoryUrl']
      categories_medium_id = categories_small['parentCategoryId']
      {
        category_id: category_id,
        category_name: category_name,
        category_url: category_url,
        categories_medium_id: categories_medium_id
      }
    end
end
