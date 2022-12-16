class MainForumSerializer < ActiveModel::Serializer
  attributes :id, :category, :heading, :created_at, :updated_at

  
  # def latest_activity
  # either filter forum_discussion_topics and forum_topic_messages for the most recent 'updated_at column'
  # or figure out action cables to listen for activity

  has_many :sub_forums, each_serializer: SubForumSerializer
  # has_many :forum_discussion_topics
  # has_many :forum_topic_messages
end
