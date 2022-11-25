class ForumDiscussionTopicsController < ApplicationController
    def index
        render json: ForumDiscussionTopic.all, status: :ok
    end

    def show
        render json: ForumDiscussionTopic.find(params[:id]), status: :ok
    end
end
