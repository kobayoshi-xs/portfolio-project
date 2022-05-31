class CreateCategoriesLarges < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_larges, id: false do |t|
      t.bigint :categoryId, null: false, primary_key: true
      t.string :categoryName
      t.string :categoryUrl

      t.timestamps
    end
  end
end
