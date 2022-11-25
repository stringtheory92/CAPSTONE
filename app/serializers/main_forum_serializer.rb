class MainForumSerializer < ActiveModel::Serializer
  attributes :id, :category, :heading, :created_at, :updated_at

  
  

  has_many :sub_forums
end
