Rails.application.routes.draw do

  # calls fallback_index_html on application_controller (necessary for react-router to work)
  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :for_sale_messages, only: [:index, :show, :create]
  resources :classified_for_sales, only: [:index, :show, :create]
  resources :classified_categories, only: [:index, :show]
  # resources :join_pins_topics
  resources :pins, only: [:index, :show, :create, :destroy]
  resources :forum_topic_messages, only: [:index, :create, :show]
  resources :forum_discussion_topics, only: [:index, :show, :create] 
  resources :sub_forums, only: [:index, :show]
  resources :main_forums, only: [:index, :show]
  # resources :dms, 
  # resources :inboxes
  resources :users, only: [:show, :create, :update]

  # sign in route
  get '/users/by_name/:user_name', to: "users#show_by_name"
  get 'users/by_id/:user_id', to: 'users#show_by_id'

  # sample user sign in data for dev
  get '/users/first_user/first', to: "users#first"
  get '/users/second_user/second', to: "users#second"
  get '/users/third_user/third', to: "users#third"

  # route to fetch all messages in topic thread
  get '/forum_topic_messages/common_topic/:forum_topic_id', to: 'forum_topic_messages#message_thread'

  # route to fetch all classified_for_sale from particular classified_category
  get '/classified_for_sales/from_category/:classified_category_id', to: 'classified_for_sales#show_from_category'

  # AUTHORIZATION / AUTHENTICATION
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  


  namespace :member do
    resources :inboxes, only: [:show]
    resources :dms, only: [:index, :show, :create]
  end

  namespace :admin do
    resources :main_forums, only: [:create, :update, :destroy]
    resources :sub_forums, only: [:create, :update, :destroy]
    resources :classified_categories, only: [:create, :update, :destroy]
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
