class UsersController < ApplicationController
    wrap_parameters format: []

    def show
       user = User.find_by(id: session[:user_id])
       
       if user
        render json: user
       else
        render json: {error: "Not authorized"}, status: :unauthorized
       end
    #    render json: User.find(params[:id]), status: :ok
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
        # render json: user, status: :ok
    end

    def show_by_id
        user = User.find(params[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        # user = User.create!(create_user_params)
        # full_user= User.find(user.id)
        # render json: full_user, status: :created
    end

    def update
       
        user = User.find(params[:id])
        # byebug
        user.update!(user_params)
        render json: user, status: :accepted
        # avatar = rails_blob_path(user.avatar)
        # render json: {user: user, avatar: avatar}, status: :accepted
    end

    

    private

    def user_params
        params.permit(:id, :avatar, :user_name, :city, :state_code, :zip, :password, :password_confirmation)
    end
    
end
