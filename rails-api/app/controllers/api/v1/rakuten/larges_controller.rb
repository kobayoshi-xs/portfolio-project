class Api::V1::Rakuten::LargesController < ApplicationController
  def search
    @categories_larges = RakutenWebService::Recipe.large_categories

    render json: @categories_larges
  end
end
