class CreateCategoriesMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_media, id: false do |t|
      t.bigint :category_id, null: false, primary_key: true
      t.string :category_name
      t.string :category_url
      t.references :categories_large, null: false

      t.timestamps
    end
    add_foreign_key :categories_media, :categories_larges, column: :categories_large_id , primary_key: :category_id
  end
end
