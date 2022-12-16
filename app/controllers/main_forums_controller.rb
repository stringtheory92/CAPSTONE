class MainForumsController < ApplicationController
    def index
        render json: MainForum.all, status: :ok
    end

    def show
        render json: MainForum.find(params[:id]), status: :ok, serializer: MainForumSerializer, include: ['sub_forums.forum_discussion_topics']
    end
end
