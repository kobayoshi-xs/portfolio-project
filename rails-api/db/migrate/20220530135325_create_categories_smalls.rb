class CreateCategoriesSmalls < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_smalls, id: false do |t|
      t.bigint :categoryId, null: false, primary_key: true
      t.string :categoryName
      t.string :categoryUrl
      t.references :categories_medium, null: false

      t.timestamps
    end
    add_foreign_key :categories_smalls, :categories_media, column: :categoryId , primary_key: :categoryId
  end
end
