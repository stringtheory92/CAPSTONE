class ClassifiedForSaleSerializer < ActiveModel::Serializer
  attributes :id, :bass, :manufacture_year, :image, :status, :price, :strings, :city, :state, :country, :last_message, :total_messages, :pic
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
  

  # def last_message_by
  #   name = User.find(object.for_sale_messages.last["user_id"]).user_name
  #   return name

      # object.for_sale_messages.last.user.user_name 
    
  # end

  belongs_to :classified_category
  belongs_to :user
  has_many :for_sale_messages


end
