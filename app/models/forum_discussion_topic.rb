class ForumDiscussionTopic < ApplicationRecord
    belongs_to :sub_forum

    # Alias for user_id column on ForumDiscussionTopics representing creator
    # Combined with special t.references on the migration, this alias becomes
    # a new named relationship between users and forum_discussion_topics
    belongs_to :creator, class_name: 'User', foreign_key: "creator_id"
    has_many :forum_topic_messages

    has_many :pins
    # If user is aliased above, perhaps this association doesn't need an alias
    has_many :users, through: :pins
    # has_many :user_pins, through: :pins, :source => :user
end
