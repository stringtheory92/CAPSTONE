class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password

  # def avatar
  #   rails_blob_path(self.avatar, only_path: true) if self.avatar.attached?
  # end
end