class Api::V1::Rakuten::ListsController < ApplicationController
  def post
    get_ranking = params.require(:APIData)
    #recipes_id = ENV['RWS_APPLICATION_ID']
    #@recipes_ranking = Faraday.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=#{recipes_id}&categoryId=21-441-1464")
    #@ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "10-67")
    @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "10-66-50")

    render json: @ranking_recipes
  end
end
