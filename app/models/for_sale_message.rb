class ForSaleMessage < ApplicationRecord
    belongs_to :classified_for_sale
    belongs_to :user
end
