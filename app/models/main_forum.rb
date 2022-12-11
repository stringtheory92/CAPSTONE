class MainForum < ApplicationRecord
    has_many :sub_forums
    has_many :forum_discussion_topics, through: :sub_forums
    has_many :forum_topic_messages, through: :forum_discussion_topics
end
