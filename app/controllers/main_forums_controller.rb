class MainForumsController < ApplicationController
    def index
        render json: MainForum.all, status: :ok
    end
end
