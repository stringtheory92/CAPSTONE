class ForumDiscussionTopic < ApplicationRecord
    belongs_to :sub_forum
    belongs_to :user
    has_many :forum_topic_messages
    has_many :pins
end
