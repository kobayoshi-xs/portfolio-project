class Api::V1::Rakuten::RecipesController < ApplicationController
  def search
    if params[:keyword]
      @recips = RakutenWebService::Recipe.search(keyword: params[:keyword])
    end
  end
end
