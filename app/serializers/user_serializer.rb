class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :balance, :password, :avatar
  include Rails.application.routes.url_helpers
  
  def avatar
    rails_blob_url(object.avatar, only_path: true) if object.avatar.attached?
  end
  
end
