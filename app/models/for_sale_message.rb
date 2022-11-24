class ForSaleMessage < ApplicationRecord
    belongs_to :classifieds_for_sale
    belongs_to :user
end
