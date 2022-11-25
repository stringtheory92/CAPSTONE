class SubForumSerializer < ActiveModel::Serializer
  attributes :id, :heading, :created_at, :updated_at

  belongs_to :main_forum
  has_many :forum_discussion_topics
end
