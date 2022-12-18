class ClassifiedForSalesController < ApplicationController
    def index
        render json: ClassifiedForSale.all, status: :ok
       end
    
       def show 
        render json: ClassifiedForSale.find(params[:id]), status: :ok
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
        data_array = []

        items = ClassifiedForSale.where(classified_category_id: params[:classified_category_id])
     
        items.each do |item|
            x = item.attributes
            x["user"] = item.user
            x["total_messages"] = item.for_sale_messages.count
            x["last_message"] = item.for_sale_messages.last
            
            if item.pic.attached?
                pic = rails_blob_path(item.pic)
                data_array << {item: x, pic: pic}
            else
                data_array << {item: x}
            end
        end
        
        render json: data_array, status: :ok
        # render json: data_array, serializer: ForSaleFromCategorySerializer, status: :ok
       end

       private
    
       def for_sale_params
        params.permit(:pic, :bass, :image, :manufacture_year, :status, :price, :strings, :city, :state, :country, :classified_category_id, :user_id)
       end
end
