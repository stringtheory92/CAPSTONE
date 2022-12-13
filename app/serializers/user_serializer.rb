class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :balance, :password, :city, :state_code, :zip, :avatar, :created_topics
  include Rails.application.routes.url_helpers
  
  def avatar
    rails_blob_url(object.avatar, only_path: true) if object.avatar.attached?
  end
  
  has_many :forum_discussion_topics
  # due to aliasing, these attributes need to be defined explicitly in a method
  # as opposed to using the macro association helpers
  def created_topics
    self.object.created_topics
  end
end
