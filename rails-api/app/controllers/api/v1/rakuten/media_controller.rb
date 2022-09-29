class Api::V1::Rakuten::MediaController < ApplicationController
  def get
    @categories_media = RakutenWebService::Recipe.medium_categories
    @categories_media.each do |categories_medium|
      item = CategoriesMedium.new(read(categories_medium))
      unless CategoriesMedium.all.exists?(category_name: item.category_name)
        item.save!
      end
    end
    @item_list = CategoriesMedium.all

    render json: @item_list
  end

  private
  def read(categories_medium)
    category_id = categories_medium['categoryId']
    category_name = categories_medium['categoryName']
    category_url = categories_medium['categoryUrl']
    categories_large_id = categories_medium['parentCategoryId']
    {
      category_id: category_id,
      category_name: category_name,
      category_url: category_url,
      categories_large_id: categories_large_id
    }
  end
end
