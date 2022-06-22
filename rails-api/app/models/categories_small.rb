class CategoriesSmall < ApplicationRecord
  self.primary_key = :categoryId

  belongs_to :categories_medium, primary_key: :categoryId

  validates :categoryId, {presence: true}
  validates :categoryUrl, {presence: true}
  validates :categories_medium_id, {presence: true}
end
