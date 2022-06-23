class Api::V1::Rakuten::LargesController < ApplicationController
  def search
    @categories_larges = RakutenWebService::Recipe.large_categories
    @categories_larges.each do |categories_large|
      item = CategoriesLarge.new(read(categories_large))
      unless CategoriesLarge.all.exists?(categoryName: item.categoryName)
        item.save!
      end
    end

    render json: @categories_larges
  end
end
