class CreateCategoriesMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_media, id: false do |t|
      t.bigint :categoryId, null: false, primary_key: true
      t.string :categoryName
      t.string :categoryUrl
      t.references :parentCategoryId, null: false

      t.timestamps
    end
    add_foreign_key :categories_media, :categories_larges, column: :categoryId , primary_key: :categoryId
  end
end
