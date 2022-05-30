class CreateCategoriesLarges < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_larges do |t|
      t.bigint :categoryId
      t.string :categoryName
      t.string :categoryUrl

      t.timestamps
    end
  end
end
