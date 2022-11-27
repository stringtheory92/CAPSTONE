class ClassifiedCategoriesController < ApplicationController
   def index
    render json: ClassifiedCategory.all, status: :ok
   end

   def show 
    render json: ClassifiedCategory.find(params[:id]), status: :ok
   end

   def create
    category = ClassifiedCategory.create!(category_params)
    render json: category, status: :created
   end

   

   private

   def category_params
    params.permit(:heading)
   end
end
