class Api::V1::Rakuten::LargesController < ApplicationController
  def search
    @categories_larges = RakutenWebService::Recipe.large_categories
    @categories_larges.each do |categories_large|
      item = CategoriesLarge.new(read(categories_large))
      unless CategoriesLarge.all.exists?(categoryName: item.categoryName)
        item.save!
      end
    end
    @item_list = CategoriesLarge.all

    render json: @item_list
  end

  private
    def read(categories_large)
      categoryId = categories_large['categoryId']
      categoryName = categories_large['categoryName']
      categoryUrl = categories_large['categoryUrl']
      {
      categoryId: categoryId,
      categoryName: categoryName,
      categoryUrl: categoryUrl
      }
    end
end
