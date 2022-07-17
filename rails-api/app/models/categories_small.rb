class CategoriesSmall < ApplicationRecord
  self.primary_key = :category_id

  belongs_to :categories_medium, primary_key: :category_id

  validates :category_id, {presence: true}
  validates :category_url, {presence: true}
  validates :categories_medium_id, {presence: true}
end
