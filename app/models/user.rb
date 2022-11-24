class User < ApplicationRecord
    has_one :inbox
    has_many :for_sale_messages
    has_many :classifieds_for_sales
    has_many :forum_discussion_topics
    
end
