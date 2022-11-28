class ForSaleMessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :media, :likes, :created_at, :updated_at

  belongs_to :classified_for_sale
  belongs_to :user
end
