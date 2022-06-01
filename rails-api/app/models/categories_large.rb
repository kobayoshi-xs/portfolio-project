class CategoriesLarge < ApplicationRecord
  self.primary_key = :categoryId

  has_many :categories_media

  validates :categoryId, {presence: true}
  validates :categoryUrl, {presence: true}
end
