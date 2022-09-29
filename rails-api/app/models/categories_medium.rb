class CategoriesMedium < ApplicationRecord
  self.primary_key = :category_id

  has_many :categories_smalls
  belongs_to :categories_large, primary_key: :category_id

  validates :category_id, {presence: true}
  validates :category_url, {presence: true}
  validates :categories_large_id, {presence: true}
end
