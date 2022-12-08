class User < ApplicationRecord
    has_one :inbox
    
    has_many :for_sale_messages
    has_many :classifieds_for_sales
    has_many :created_topics, class_name: 'ForumDiscussionTopic', foreign_key: 'creator_id'

    has_many :pins
    # No alias here if creator/creation is aliased already
    has_many :forum_discussion_topics, through: :pins


    has_secure_password

    has_one_attached :avatar 
    # has_one_attached :avatar do |attachable|
    #     attachable.variant(:thumb, resize_to_fill: [300, 300])
    # end
    # attachable.variant :thumb, resize_to_limit: [100, 100]

    # def avatar_as_thumbnail 
    #     avatar.variant
    # end
    
end
