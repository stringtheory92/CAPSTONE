class Dm < ApplicationRecord
    # dm.user = sender 
    belongs_to :user
    belongs_to :inbox

end
