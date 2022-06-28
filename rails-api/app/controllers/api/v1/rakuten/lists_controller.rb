class Api::V1::Rakuten::ListsController < ApplicationController
  def search
    get_ranking =
    recipes_id = ENV['RWS_APPLICATION_ID']
    @recipes_ranking = Faraday.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=#{recipes_id}&categoryId=21-441-1464")

    render json: @recipes_ranking
  end
end
