class Api::V1::Rakuten::ItemsController < ApplicationController
  def search
    @categories_larges = RakutenWebService::Recipe.large_categories
    @categories_larges.each do |categories_large|
      item = CategoriesLarge.new(read(categories_large))
      unless CategoriesLarge.all.exists?(categoryName: item.categoryName)
        item.save
      end
    end
    #CategoriesLarge.destroy_all
    #@item_list = CategoriesLarge.all
    #render json: @item_list

    @categories_media = RakutenWebService::Recipe.medium_categories
    @categories_media.each do |categories_medium|
      item = CategoriesMedium.new(read2(categories_medium))
      unless CategoriesMedium.all.exists?(categoryName: item.categoryName)
        item.save
      end
    end
    #@item_list = CategoriesMedium.all
    #render json: @item_list

    @categories_smalls =  RakutenWebService::Recipe.small_categories
    @categories_smalls.each do |categories_small|
      item = CategoriesSmall.new(read3(categories_small))
      unless CategoriesSmall.all.exists?(categoryName: item.categoryName)
        item.save
      end
    end
    #@item_list = CategoriesMedium.all
    #render json:
    #@recipes = RakutenWebService::Recipe.large_categories.find_by_id[30]

    #@categories_large = RakutenWebService::Recipe.large_categories
    #@categories_medium = RakutenWebService::Recipe.medium_categories
    #@categories_small =  RakutenWebService::Recipe.small_categories

    recipes_id = ENV['RWS_APPLICATION_ID']
    @ranking_recipes = Faraday.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=#{recipes_id}&categoryId=21-441-1464")#URLの部分を’’から""に変えたら#{}の部分がうまくいった
    #@ranking_recipes = RakutenWebService::Recipe.ranking(category_id = 10-66-50)
    #@ranking = request.url('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=ENV['RWS_APPLICATION_ID']&categoryId=32-339')
    #@ranking_recipes = @categories_smalls.first.ranking
    #@recipes = @categories_small.where(categoryId: 32-339)
    #render json: { status: 200, data: @items }
    render json: @ranking_recipes

    #テーブル結合
    #@categories_items = CategoriesLarge.includes(categories_media: :categories_smalls)

    #render json: @categories_items
  end

  private
    def read(categories_large)
      categoryId = categories_large['categoryId']
      categoryName = categories_large['categoryName']
      categoryUrl = categories_large['categoryUrl']
      {
        categoryId: categoryId,
        categoryName: categoryName,
        categoryUrl: categoryUrl
      }
    end

    def read2(categories_medium)
      categoryId = categories_medium['categoryId']
      categoryName = categories_medium['categoryName']
      categoryUrl = categories_medium['categoryUrl']
      parentCategoryId_id = categories_medium['parentCategoryId']
      {
        categoryId: categoryId,
        categoryName: categoryName,
        categoryUrl: categoryUrl,
        parentCategoryId_id: parentCategoryId_id
      }
    end

    def read3(categories_small)
      categoryId = categories_small['categoryId']
      categoryName = categories_small['categoryName']
      categoryUrl = categories_small['categoryUrl']
      parentCategoryId_id = categories_small['parentCategoryId']
      {
        categoryId: categoryId,
        categoryName: categoryName,
        categoryUrl: categoryUrl,
        parentCategoryId_id: parentCategoryId_id
      }
    end
end
