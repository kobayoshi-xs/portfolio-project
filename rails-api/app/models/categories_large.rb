class CategoriesLarge < ApplicationRecord
  self.primary_key = :category_id

  has_many :categories_media

  validates :category_id, {presence: true}
  validates :category_url, {presence: true}
end
