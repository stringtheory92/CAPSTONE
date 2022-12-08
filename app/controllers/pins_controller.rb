class PinsController < ApplicationController
    wrap_parameters format: []
    def index 
        render json: Pin.all, status: :ok
    end

    def show
        render json: Pin.find(params[:id]), status: :ok
    end

    def create
        pin = Pin.create!(pin_params)
        render json: pin, status: :created
    end

    def destroy
        pin = Pin.find(params[:id])
        pin.destroy!
        head :no_content
    end

    private

    def pin_params
        params.permit(:user_id, :forum_discussion_topic_id)
    end
    
end
