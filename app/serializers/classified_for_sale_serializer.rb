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
    # self.object.for_sale_messages
    return self.object.for_sale_messages.map do |message|
      # avatar = message.user.rails_blob_path(object.pic, only_path: true)
      # if avatar
      #   authorObj = {**message.user, avatar: avatar}
      # else 
      #   authorObj = {**message.user}
      # end
      # {**message.attributes, author: authorObj}
      {**message.attributes, author: {**message.user.attributes, avatar: rails_blob_path(message.user.avatar, only_path: true)}}
      
      
    end
    
  end


  

  # def last_message_by
  #   name = User.find(object.for_sale_messages.last["user_id"]).user_name
  #   return name

      # object.for_sale_messages.last.user.user_name 
    
  # end

  belongs_to :classified_category
  belongs_to :user
  # has_many :for_sale_messages


end
