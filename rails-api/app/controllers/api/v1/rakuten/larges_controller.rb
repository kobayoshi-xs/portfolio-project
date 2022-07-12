class Api::V1::Rakuten::LargesController < ApplicationController
  def get
    @categories_larges = RakutenWebService::Recipe.large_categories
    @categories_larges.each do |categories_large|
      item = CategoriesLarge.new(read(categories_large))
      unless CategoriesLarge.all.exists?(category_name: item.category_name)
        item.save!
      end
    end
    @item_list = CategoriesLarge.all

    render json: @item_list
    #render json: @categories_larges
  end

  private
    def read(categories_large)
      category_id = categories_large['categoryId']
      category_name = categories_large['categoryName']
      category_url = categories_large['categoryUrl']
      {
      category_id: category_id,
      category_name: category_name,
      category_url: category_url
      }
    end
end
