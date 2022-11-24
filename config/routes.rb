Rails.application.routes.draw do
  resources :for_sale_messages
  resources :classified_for_sales
  resources :classified_categories
  resources :join_pins_topics
  resources :user_pins
  resources :forum_topic_messages
  resources :forum_discussion_topics
  resources :sub_forums
  resources :main_forums
  resources :dms
  resources :inboxes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
