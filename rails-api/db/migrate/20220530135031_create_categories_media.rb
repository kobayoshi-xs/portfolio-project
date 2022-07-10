class CreateCategoriesMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_media, id: false do |t|
      t.bigint :categoryId, null: false, primary_key: true
      t.string :categoryName
      t.string :categoryUrl
      t.references :categories_large, null: false

      t.timestamps
    end
    add_foreign_key :categories_media, :categories_larges, column: :categories_large_id , primary_key: :categoryId
  end
end
