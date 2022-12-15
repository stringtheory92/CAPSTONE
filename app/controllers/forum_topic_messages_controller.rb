class ForumTopicMessagesController < ApplicationController
    wrap_parameters format: []
    def index
        render json: ForumTopicMessage.all, status: :ok
    end

    def show
        render json: ForumTopicMessage.find(params[:id])
    end

    def create
        message = ForumTopicMessage.create!(forum_topic_message_params)
        message.forum_discussion_topic.update!(last_message_date: message.created_at)
        render json: message, status: :created
    end

    def message_thread
        render json:  messages = ForumTopicMessage.where(forum_discussion_topic_id: params[:forum_topic_id]), status: :ok
    end

    private

    def forum_topic_message_params
        params.permit(:content, :media, :forum_discussion_topic_id, :user_id)
    end
end
