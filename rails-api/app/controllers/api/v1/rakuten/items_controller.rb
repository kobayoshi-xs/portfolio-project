class Api::V1::Rakuten::ItemsController < ApplicationController
  def search
    #if params[:keyword]
      #@recips = RakutenWebService::Recipe.search(keyword: params[:keyword])
      #render json: { status: 200, data: @recips }
    #end
    #@recipes = RakutenWebService::Recipe.large_categories.find_by_id[30]
    @categories_large = RakutenWebService::Recipe.large_categories
    @categories_medium = RakutenWebService::Recipe.medium_categories
    @categories_small =  RakutenWebService::Recipe.small_categories

    @recipes = @categories_small.first.ranking
    #render json: { status: 200, data: @items }
    render json:  @categories_large#@items_medium
  end
end
