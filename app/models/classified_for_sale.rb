class ClassifiedForSale < ApplicationRecord
    belongs_to :classified_category
    belongs_to :user
    has_many :for_sale_messages

    has_one_attached :pic
    # include Rails.application.routes.url_helpers

    def for_sale_messages_method
        return self.for_sale_messages.map do |message|
            # binding.pry
        #  { **message.attributes, author: {**message.user.attributes}}
          {**message.attributes, author: {**message.user.attributes, avatar: rails_blob_path(message.user.avatar, only_path: true)}}
        end
      end
end
