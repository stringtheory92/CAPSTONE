class ClassifiedForSalesController < ApplicationController
    def index
        render json: ClassifiedForSale.all, status: :ok
       end
    
       def show 
        render json: ClassifiedForSale.find(params[:id]), status: :ok
       end
    
       def create
        item = ClassifiedForSale.create!(for_sale_params)
        render json: item, status: :created
       end
    
       private
    
       def for_sale_params
        params.permit(:bass, :manufacture_year, :status, :price, :strings, :city, :state, :country)
       end
end
