class ClassifiedForSale < ApplicationRecord
    belongs_to :classifieds_category
    belongs_to :user
    has_many :for_sale_messages
end
