class SubForumsController < ApplicationController
    def index   
        render json: SubForum.all, status: :ok
    end

    def show
        render json: SubForum.find(params[:id]), status: :ok
    end
    
end
