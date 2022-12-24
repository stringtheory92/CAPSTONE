
class ApplicationController < ActionController::API
    # include ::ActionController::Serialization
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  
    def fallback_index_html
      render file:
      'client/public/index.html'
    end

    private

  
    def render_not_found_response(exception)
      render json: {"error": "#{exception.model} not found"}, status: :not_found
    end
  
    def render_invalid_response(invalid)
      
      render json: invalid.record.errors, status: :unprocessable_entity
    end
  
  
    
end
