class ForSaleMessagesController < ApplicationController
    def index
        render json: ForSaleMessage.all, status: :ok
       end
    
       def show 
        render json: ForSaleMessage.find(params[:id]), status: :ok
       end
    
       def create
        message = ForSaleMessage.create!(message_params)
        render json: message, status: :created
       end
    
       private
    
       def message_params
        params.permit(:content, :media)
       end
end
