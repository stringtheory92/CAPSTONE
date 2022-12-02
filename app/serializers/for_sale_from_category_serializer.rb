class ForSaleFromCategorySerializer < ActiveModel::Serializer
  attributes :id, :pic, :bass, :image, :manufacture_year, :status, :price, :strings, :city, :state, :country
  belongs_to :user
end
