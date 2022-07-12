class CreateCategoriesLarges < ActiveRecord::Migration[6.1]
  def change
    create_table :categories_larges, id: false do |t|
      t.bigint :category_id, null: false, primary_key: true
      t.string :category_name
      t.string :category_url

      t.timestamps
    end
  end
end
