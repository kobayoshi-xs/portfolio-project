class CategoriesMedium < ApplicationRecord
  self.primary_key = :categoryId

  has_many :categories_smalls
  belongs_to :categories_large, primary_key: :categoryId

  validates :categoryId, {presence: true}
  validates :categoryUrl, {presence: true}
  validates :parentCategoryId, {presence: true}
end
