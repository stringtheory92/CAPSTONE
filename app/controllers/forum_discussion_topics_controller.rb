class ForumDiscussionTopicsController < ApplicationController
    def index
        render json: ForumDiscussionTopic.all, status: :ok
    end
end
