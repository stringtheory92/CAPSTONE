class ClassifiedForSale < ApplicationRecord
    belongs_to :classified_category
    belongs_to :user
    has_many :for_sale_messages
end
