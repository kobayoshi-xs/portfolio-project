class CreateCategoriesMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_media do |t|
      t.bigint :categoryId
      t.string :categoryName
      t.string :categoryUrl
      t.bigint :parentCategoryId

      t.timestamps
    end
  end
end
