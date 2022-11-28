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
    
       def show_from_category
        
        items = ClassifiedForSale.where(classified_category_id: params[:classified_category_id])
        render json: items, status: :ok
       end

       private
    
       def for_sale_params
        params.permit(:bass, :image, :manufacture_year, :status, :price, :strings, :city, :state, :country)
       end
end
