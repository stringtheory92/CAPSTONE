class ClassifiedForSaleSerializer < ActiveModel::Serializer
  attributes :id, :bass, :manufacture_year, :image, :status, :price, :strings, :city, :state, :country, :last_message, :total_messages, :pic, :for_sale_messages
  include Rails.application.routes.url_helpers


  def pic
    rails_blob_url(object.pic, only_path: true) if object.pic.attached?
  end


  def total_messages
    self.object.for_sale_messages.count
  end


  def last_message  
    self.object.for_sale_messages.last
  end


  def for_sale_messages
    return self.object.for_sale_messages.map do |message|

      message_hash = {**message.attributes, author: {**message.user.attributes}}
      message_hash[:author]['avatar'] = rails_blob_path(message.user.avatar.blob, only_path: true) if message.user.avatar.blob
      message_hash
    end
  end

  belongs_to :classified_category
  belongs_to :user
end
