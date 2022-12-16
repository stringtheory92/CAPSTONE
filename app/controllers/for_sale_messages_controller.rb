class ForSaleMessagesController < ApplicationController
    wrap_parameters format: []
    def index
        render json: ForSaleMessage.all, status: :ok
       end
    
       def show 
        render json: ForSaleMessage.find(params[:id]), status: :ok
       end
    
       def create
        # byebug
        message = ForSaleMessage.create!(message_params)
        render json: message, status: :created
       end
    
       private
    
       def message_params
        params.permit(:content, :media, :classified_for_sale_id, :user_id)
       end
end
