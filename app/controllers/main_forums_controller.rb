class MainForumsController < ApplicationController
    def index
        render json: User.all, status: :ok
    end
end
