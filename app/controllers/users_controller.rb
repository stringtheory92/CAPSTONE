class UsersController < ApplicationController
    

    def show
       render json: User.find(params[:id]), status: :ok
    end

    def show_by_name
        user = User.find_by!(user_name: params[:user_name])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        full_user= User.find(user.id)
        render json: full_user, status: :created
    end

    private

    def create_user_params
        params.permit(:user_name, :password)
    end
    
end
