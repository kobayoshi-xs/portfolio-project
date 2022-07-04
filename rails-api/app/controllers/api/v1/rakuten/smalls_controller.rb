class Api::V1::Rakuten::SmallsController < ApplicationController
  def search
    @categories_smalls =  RakutenWebService::Recipe.small_categories
    @categories_smalls.each do |categories_small|
      item = CategoriesSmall.new(read(categories_small))
      unless CategoriesSmall.all.exists?(categoryName: item.categoryName)
        item.save!
      end
    end
    @item_list = CategoriesSmall.all

    render json: @item_list
  end

  private
    def read(categories_small)
      categoryId = categories_small['categoryId']
      categoryName = categories_small['categoryName']
      categoryUrl = categories_small['categoryUrl']
      categories_medium_id = categories_small['parentCategoryId']
      {
        categoryId: categoryId,
        categoryName: categoryName,
        categoryUrl: categoryUrl,
        categories_medium_id: category_medium_id
      }
    end
end
