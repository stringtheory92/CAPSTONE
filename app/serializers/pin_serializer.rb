class PinSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :forum_discussion_topic
end
