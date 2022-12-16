class ForumDiscussionTopicsController < ApplicationController
    wrap_parameters format: []
    def index
        render json: ForumDiscussionTopic.all, status: :ok
    end

    def show
        render json: ForumDiscussionTopic.find(params[:id]), status: :ok
    end

    def create
       
        topic = ForumDiscussionTopic.create!(forum_discussion_topic_params)
        render json: topic, status: :created
    end

    private

    def forum_discussion_topic_params
        params.permit(:heading, :sub_forum_id, :creator_id, :last_message_date)
    end
end
