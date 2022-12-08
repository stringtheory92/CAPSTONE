class PinSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :forum_discussion_topic_id

  belongs_to :forum_discussion_topic
end
