class ForumTopicMessage < ApplicationRecord
    belongs_to :forum_discussion_topic
    belongs_to :user

end
