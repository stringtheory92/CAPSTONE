class ForumTopicMessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :media, :likes, :created_at, :updated_at

  belongs_to :user
  belongs_to :forum_discussion_topic
end
