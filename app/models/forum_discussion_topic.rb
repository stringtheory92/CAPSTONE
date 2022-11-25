class ForumDiscussionTopic < ApplicationRecord
    belongs_to :sub_forum
    belongs_to :user
    has_many :forum_topic_messages
    has_many :join_pins_topics
    has_many :user_pins, through: :join_pins_topics
end
