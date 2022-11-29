class UsersController < ApplicationController
    

    def show
       render json: User.find(params[:id]), status: :ok
    end

    # for sample login data
    def first
        user = User.first!
        render json: user, status: :ok
    end

    def second
        user = User.second!
        render json: user, status: :ok
    end

    def third
        user = User.third!
        render json: user, status: :ok
    end

    #for grabbing user on login
    def show_by_name
        user = User.find_by!(user_name: params[:user_name])
        if user.avatar.attached?
           
            avatar = rails_blob_path(user.avatar)
            
            render json: {user: user, avatar: avatar}, status: :ok
        else 
            
            render json: {user: user}, status: :ok
        end
    end

    def create
        user = User.create!(create_user_params)
        full_user= User.find(user.id)
        render json: full_user, status: :created
    end

    private

    def create_user_params
        params.require(:user_name, :password).permit(:avatar)
    end
    
end
