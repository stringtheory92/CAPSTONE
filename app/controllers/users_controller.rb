class UsersController < ApplicationController
    

    def show
       render json: User.find(params[:id]), status: :ok
    end

    # for sample login data
    def first
        user = User.first!
        render json: user, status: :ok
    end

    #for grabbing user on login
    def show_by_name
        user = User.find_by!(user_name: params[:user_name])
        render json: user, status: :ok
    end

    def create
        user = User.create!(create_user_params)
        full_user= User.find(user.id)
        render json: full_user, status: :created
    end

    private

    def create_user_params
        params.permit(:user_name, :password)
    end
    
end
