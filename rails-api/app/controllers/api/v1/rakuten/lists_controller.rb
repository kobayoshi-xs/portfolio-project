class Api::V1::Rakuten::ListsController < ApplicationController
  #before_action :post
  def get
    #binding.pry
    #@get_ranking = 30#react側から送られてくる、カテゴリー（大）の仮id
    #テーブル結合
    #binding.pry
    #@categories_items = CategoriesLarge.includes(categories_media: :categories_smalls)
    #binding.pry
    #結合データからクリックアクションで取得したカテゴリー（大）データを抽出
    #@lists = @categories_items.where(category_id: @get_ranking)

    #@medium_lists = []#抽出したカテゴリー（中）データを格納
    #@media_lists = []#カテゴリー（大）データの主キー（category_id）と、抽出したカテゴリー（中）データの主キー（category_id）をハイフンで連結したものを格納

    #@small_lists = []#カテゴリー（小）のデータを抽出したものを格納
    #@small = []#カテゴリー（大）とカテゴリー（中）とカテゴリー（小）の主キーをそれぞれハイフンで繋いだものを格納

    #@ranking_recipes = []#各カテゴリーの主キーをハイフンで繋いだものからレシピデータを取得したものを格納

    #カテゴリー（大）データからカテゴリー（中）データを抽出
    #@lists.each do |list|
    #  list.categories_media.each do |categories_medium|
    #    @medium_lists << categories_medium
    #  end
    #end

    #抽出したカテゴリー（中）データから主キーのcategory_idのみを配列として獲得、その後
    #@media_ids = @medium_lists.pluck(:category_id)
    #@media_ids.each do |medium|
    #  @media_lists << "#{@get_ranking}-#{medium}"
    #end

    #カテゴリー（小）のデータを抽出
    #@lists.each do |list|
    #  list.categories_media.each do |categories_medium|
    #    categories_medium.categories_smalls.each do |categories_small|
    #      @small_lists << categories_small
    #    end
    #  end
    #end

    #@medium_lists.each_with_index do |medium_list|
    #  smalls = medium_list.categories_smalls
    #  smalls_ids = smalls.pluck(:category_id)

    #  smalls_ids.each do |small_id|
    #    @small << "#{@get_ranking}-#{medium_list[:category_id]}-#{small_id}"
    #  end

     # @small_results = @small.flatten
      #@recipes = @small_results[0..2]
    #end
    #@recipes.each do |small_result|
    #  @ranking_recipes << RakutenWebService::Recipe.ranking(category_id = small_result)
    #  sleep(0.000001)
      #binding.pry
    #end
    #binding.pry
    #@ranking_result = @ranking_recipes.flatten
    #render json: @ranking_result
    #binding.pry

    #@medium_lists.clear
    #@media_lists.clear
    #@small_lists.clear
    #@small.clear
    #@ranking_recipes.clear
  end

  def list
    render json: { message: 'test' }
  end

  #private
  def post
    #@get_ranking = 30#react側から送られてくる、カテゴリー（大）の仮id
    #@data = params[:APIData]
    #unless @data.nil?
    #  ranking_data = @data[:category_id]
    #  @get_ranking = ranking_data
    #end
    #テーブル結合
    #binding.pry
    #@categories_items = CategoriesLarge.includes(categories_media: :categories_smalls)
    #binding.pry
    #結合データからクリックアクションで取得したカテゴリー（大）データを抽出
    #@lists = @categories_items.where(category_id: @get_ranking)

    #@medium_lists = []#抽出したカテゴリー（中）データを格納
    #@media_lists = []#カテゴリー（大）データの主キー（category_id）と、抽出したカテゴリー（中）データの主キー（category_id）をハイフンで連結したものを格納

    #@small_lists = []#カテゴリー（小）のデータを抽出したものを格納
    #@small = []#カテゴリー（大）とカテゴリー（中）とカテゴリー（小）の主キーをそれぞれハイフンで繋いだものを格納

    #@ranking_recipes = []#各カテゴリーの主キーをハイフンで繋いだものからレシピデータを取得したものを格納

    #カテゴリー（大）データからカテゴリー（中）データを抽出
    #@lists.each do |list|
     # list.categories_media.each do |categories_medium|
     #   @medium_lists << categories_medium
     # end
    #end

    #抽出したカテゴリー（中）データから主キーのcategory_idのみを配列として獲得、その後
    #@media_ids = @medium_lists.pluck(:category_id)
    #@media_ids.each do |medium|
    #  @media_lists << "#{@get_ranking}-#{medium}"
    #end

    #カテゴリー（小）のデータを抽出
    #@lists.each do |list|
    #  list.categories_media.each do |categories_medium|
    #    categories_medium.categories_smalls.each do |categories_small|
    #      @small_lists << categories_small
    #    end
    #  end
    #end

    #@medium_lists.each_with_index do |medium_list|
    #  smalls = medium_list.categories_smalls
    #  smalls_ids = smalls.pluck(:category_id)

    #  smalls_ids.each do |small_id|
    #    @small << "#{@get_ranking}-#{medium_list[:category_id]}-#{small_id}"
    #  end

    #  @small_results = @small.flatten
    #  @recipes = @small_results[0..2]
    #end
    #binding.pry
    #@recipes.each do |small_result|
    #  @ranking_recipes << RakutenWebService::Recipe.ranking(category_id = small_result)
    #  sleep(0.000001)
      #binding.pry
    #end

    #@medium_lists.clear
    #@media_lists.clear
    #@small_lists.clear
    #@small.clear
    #binding.pry
    #@ranking_result = @ranking_recipes.flatten
    #render json: @ranking_result
    #binding.pry

    #@ranking_recipes.clear
  end
end
