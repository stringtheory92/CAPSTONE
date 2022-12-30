
class FallbackController < ActionController::Base

    def index
      # React app index page
      # byebug
      render file: 'public/index.html'
    end
  end