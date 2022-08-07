class Api::V1::Rakuten::ListsController < ApplicationController
  def get
    #@get_ranking = params.require(:APIData).permit(:category_id)
    @first = 30
    @get_ranking = 10

    #テーブル結合
    @categories_items = CategoriesLarge.includes(categories_media: :categories_smalls)
    #@lists = @categories_items.where(CategoriesLarge: {category_id: 10})
    @lists = @categories_items.where(category_id: @get_ranking)
    #@new_lists = @lists.pluck(:category_id)
    #@large_lists = @lists.where(category_id: @get_ranking)
    @medium_lists = []
    @media_lists = []

    @lists.each do |list|
      list.categories_media.each do |categories_medium|
        @medium_lists << categories_medium
      end
    end
    @media_ids = @medium_lists.pluck(:category_id)
    @media_ids.each do |medium|
      @media_lists << "#{@get_ranking}-#{medium}"
    end

    @small_lists = []
    @lists.each do |list|
      list.categories_media.each do |categories_medium|
        categories_medium.categories_smalls.each do |categories_small|
          @small_lists << categories_small
        end
      end
    end
    @smalls_id = @small_lists.pluck(:category_id)

    @media = []

    @small = []
    #@medium_lists.categories_smalls
    @medium_lists.each_with_index do |medium_list|
      #binding.pry
      #@test = medium_list.categories_smalls
      #@res << medium_list.categories_smalls
      #@res_result = @res.flatten
      smalls = medium_list.categories_smalls
      #medium_list[:category_id]

      smalls_ids = smalls.pluck(:category_id)

      #medium_list.categories_smalls.pluck(:category_id).each do |small_id|
      smalls_ids.each do |small_id|
        @small << "#{@get_ranking}-#{medium_list[:category_id]}-#{small_id}"
      end

      @small_results = @small.flatten
      #binding.pry
      #if medium_list[:category_id] == @test[:categories_medium_id]
      #  @smalls_ids << @test.pluck(:category_id)
      #  @media << @medium_lists.pluck(:category_id)
      #
      #  @media.zip(@smalls_ids) do |medium, small_id|
      #    @small << "#{@get_ranking}-#{medium}-#{small_id}"
      #  end
        #@small << "#{get_ranking}-#{}-#{@smalls_ids}"
      #end
    end

    #binding.pry
    @ranking_recipes = []
    #@recipes_result = []
    if @small.present?
      @small_results.each do |small_result|
        #binding.pry
        @ranking_recipes << RakutenWebService::Recipe.ranking(category_id = small_result)
        sleep(0.001)
        @ranking_result = @ranking_recipes.flatten
        #@recipes_result << @ranking_recipes
        #binding.pry
      end
      #sleep(1)
      #binding.pry
      render json: @ranking_result
    #elsif @medium_lists.present?
    #  @small_lists.each do |list|
    #    @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{@get_ranking}-#{list}")
    #  end
    #  render json: @ranking_recipes
    #elsif @test.present?
    #  @lists.each do |list|
    #    @ranking_recipes = RakutenWebService::Recipe.ranking(category_id = "#{list}")
    #  end
    #  render json: @ranking_recipes
    #else
      #@lists.each do |list|
       # @ranking_recipes =  RakutenWebService::Recipe.ranking(category_id = "30")
      #end
      #render json: @ranking_recipes
      #render json: @ranking_recipes
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
