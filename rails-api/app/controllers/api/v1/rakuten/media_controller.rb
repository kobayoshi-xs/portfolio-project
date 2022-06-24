class Api::V1::Rakuten::MediaController < ApplicationController
  def search
    recipes_id = ENV['RWS_APPLICATION_ID']
    @categories_media = Faraday.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=#{recipes_id}&categoryId=21-441-1464")

    render json: @categories_media
  end
end
