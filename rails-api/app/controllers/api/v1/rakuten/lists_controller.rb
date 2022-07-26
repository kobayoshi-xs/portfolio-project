class Api::V1::Rakuten::ListsController < ApplicationController
  def get
    #@get_ranking = params.require(:APIData).permit(:category_id)
    @first = 30
    @get_ranking = 10
    #@b = 67
    #@c = 1491

    #テーブル結合
    @categories_items = CategoriesLarge.includes(categories_media: :categories_smalls)
    #@lists = @categories_items.where(CategoriesLarge: {category_id: 10})
    @lists = @categories_items.where(category_id: @get_ranking)
    #@new_lists = @lists.pluck(:category_id)
    #@large_lists = @lists.where(category_id: @get_ranking)
    @medium_lists = []
    @lists.each do |list|
      list.categories_media.each do |categories_medium|
        @medium_lists << categories_medium
      end
    end
    @media = @medium_lists.pluck(:category_id)

    @small_lists = []
    @lists.each do |list|
      list.categories_media.each do |categories_medium|
        categories_medium.categories_smalls.each do |categories_small|
          @small_lists << categories_small
        end
      end
    end
    @smalls = @small_lists.pluck(:category_id)

    binding.pry

    if CategoriesSmalls.exits?(category_id: category_id)
      @lists.each do |list|
        @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{}-#{}-#{}")
      end
      render json: @ranking_recipes
    elsif CategoriesMedia.exits?(category_id: category_id)
      @lists.each do |list|
        @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{}-#{}")
      end
      render json: @ranking_recipes
    elsif CategoriesLarge.exits?(category_id: category_id)
      @lists.each do |list|
        @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{list}")
      end
      render json: @ranking_recipes
    else
      #@lists.each do |list|
        @ranking_recipes =  RakutenWebService::Recipe.ranking(category_id = "30")
      #end
      render json: @ranking_recipes
    end
    #recipes_id = ENV['RWS_APPLICATION_ID']
    #@recipes_ranking = Faraday.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=#{recipes_id}&categoryId=21-441-1464")
    #@ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "10-66-50")
    #@ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{@get_ranking}-#{@b}-#{@c}")

    #render json: @ranking_recipes
  end

  private
  def post
    @get_ranking = params[:APIData][:category_id]
  end
end
