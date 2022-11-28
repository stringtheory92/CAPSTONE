class ClassifiedForSaleSerializer < ActiveModel::Serializer
  attributes :id, :bass, :manufacture_year, :image, :status, :price, :strings, :city, :state, :country

  belongs_to :classified_category
  belongs_to :user


end
