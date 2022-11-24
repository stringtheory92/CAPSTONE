class UserPin < ApplicationRecord
    has_one :user
    has_many :dms
    has_many :join_pins_topics
    has_many :forum_discussion_topics, through: :join_pins_topics
end
