Rails.application.routes.draw do
  resources :for_sale_messages, only: [:index]
  resources :classified_for_sales, only: [:index, :show]
  resources :classified_categories, only: [:index]
  # resources :join_pins_topics
  resources :user_pins, only: [:index]
  resources :forum_topic_messages, only: [:index, :create, :show]
  resources :forum_discussion_topics, only: [:index, :show, :create] 
  resources :sub_forums, only: [:index, :show]
  resources :main_forums, only: [:index, :show]
  # resources :dms, 
  # resources :inboxes
  resources :users, only: [:show, :create]

  # sign in route
  get '/users/by_name/:user_name', to: "users#show_by_name"

  # sample user sign in data for dev
  get '/users/first_user/first', to: "users#first"

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
