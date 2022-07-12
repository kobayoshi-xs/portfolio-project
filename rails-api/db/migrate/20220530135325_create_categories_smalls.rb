class CreateCategoriesSmalls < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_smalls, id: false do |t|
      t.bigint :category_id, null: false, primary_key: true
      t.string :category_name
      t.string :category_url
      t.references :categories_medium, null: false

      t.timestamps
    end
    add_foreign_key :categories_smalls, :categories_media, column: :categories_medium_id , primary_key: :category_id
  end
end
