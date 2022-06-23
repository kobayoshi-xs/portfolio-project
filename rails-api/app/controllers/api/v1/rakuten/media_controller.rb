class Api::V1::Rakuten::MediaController < ApplicationController
  def search
    @categories_media = RakutenWebService::Recipe.medium_categories
    @categories_media.each do |categories_medium|
      item = CategoriesMedium.new(read2(categories_medium))
      unless CategoriesMedium.all.exists?(categoryName: item.categoryName)
        item.save!
      end
    end

    render json: @categories_media
  end
end
