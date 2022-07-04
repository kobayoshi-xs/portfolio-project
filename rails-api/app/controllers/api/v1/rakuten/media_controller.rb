class Api::V1::Rakuten::MediaController < ApplicationController
  def search
    @categories_media = RakutenWebService::Recipe.medium_categories
    @categories_media.each do |categories_medium|
      item = CategoriesMedium.new(read(categories_medium))
      unless CategoriesMedium.all.exists?(categoryName: item.categoryName)
        item.save!
      end
    end
    @item_list = CategoriesMedium.all

    render json: @item_list
  end

  private
  def read(categories_medium)
    categoryId = categories_medium['categoryId']
    categoryName = categories_medium['categoryName']
    categoryUrl = categories_medium['categoryUrl']
    categories_large_id = categories_medium['parentCategoryId']
    {
      categoryId: categoryId,
      categoryName: categoryName,
      categoryUrl: categoryUrl,
      categories_large_id: categories_large_id
    }
  end
end
