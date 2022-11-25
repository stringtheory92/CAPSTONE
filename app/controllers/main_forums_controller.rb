class MainForumsController < ApplicationController
    def index
        render json: MainForum.all, status: :ok
    end

    def show
        render json: MainForum.find(params[:id]), status: :ok
    end
end
