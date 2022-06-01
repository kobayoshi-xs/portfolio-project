class CategoriesSmall < ApplicationRecord
  self.primary_key = :categoryId

  belongs_to :categories_media, primary_key: :categoryId

  validates :categoryId, {presence: true}
  validates :categoryUrl, {presence: true}
  validates :parentCategoryId, {presence: true}
end
