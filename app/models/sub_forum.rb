class SubForum < ApplicationRecord
    belongs_to :main_forum
    has_many :forum_discussion_topics
end
