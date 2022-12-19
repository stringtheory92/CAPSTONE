class ClassifiedForSale < ApplicationRecord
    belongs_to :classified_category
    belongs_to :user
    has_many :for_sale_messages

    has_one_attached :pic

# Not currently in use
    def for_sale_messages_method
        return self.for_sale_messages.map do |message|
       
          {**message.attributes, author: {**message.user.attributes, avatar: rails_blob_path(message.user.avatar, only_path: true)}}
        end
      end
end
