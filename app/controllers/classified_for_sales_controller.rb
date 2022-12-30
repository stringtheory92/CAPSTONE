class ClassifiedForSalesController < ApplicationController
    def index
        render json: ClassifiedForSale.all, status: :ok
       end
    

       def show 
        
        
        # item = ClassifiedForSale.find(params[:id])
        # item_messages = item.for_sale_messages_method

        # render json: {**item.attributes, messages: item_messages}, status: :ok, serializer: ClassifiedForSaleSerializer
        # render json: item, status: :ok, serializer: ClassifiedForSaleSerializer
        
        render json: ClassifiedForSale.find(params[:id]), status: :ok, serializer: ClassifiedForSaleSerializer
       end
    

       def create
        
        item = ClassifiedForSale.create!(for_sale_params)

        
        pic = rails_blob_path(item.pic)

        if pic
            render json: {item: item, pic: pic}, status: :created
        else
            render json: {item: item}, status: :created
        end
       end
    

       def show_from_category
        
        items = ClassifiedForSale.where(classified_category_id: params[:classified_category_id])
        
        
        render json: items, status: :ok
       
       end

       private
    
       def for_sale_params
        params.permit(:pic, :bass, :image, :manufacture_year, :status, :price, :strings, :city, :state, :country, :classified_category_id, :user_id)
       end
end
