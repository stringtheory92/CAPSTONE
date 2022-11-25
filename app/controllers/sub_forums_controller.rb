class SubForumsController < ApplicationController
    def index   
        render json: SubForum.all, status: :ok
    end
end
