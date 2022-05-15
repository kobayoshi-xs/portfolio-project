class Api::V1::Rakuten::RecipesController < ApplicationController
  def search
    #if params[:keyword]
      #@recips = RakutenWebService::Recipe.search(keyword: params[:keyword])
      #render json: { status: 200, data: @recips }
    #end
    @recipes = RakutenWebService::Recipe.large_categories.find_by_id[30]
    render json: { status: 200, data: @recips }
    byebug
  end
end
