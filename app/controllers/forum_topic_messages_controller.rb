class ForumTopicMessagesController < ApplicationController
    def index
        render json: ForumTopicMessage.all, status: :ok
    end

    def show
        render json: ForumTopicMessage.find(params[:id])
    end

    def create
        message = ForumTopicMessage.create!(forum_topic_message_params)
        render json: message, status: :created
    end

    private

    def forum_topic_message_params
        params.permit(:content, :media, :forum_discussion_topic_id, :user_id)
    end
end
