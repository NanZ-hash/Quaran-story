Rails.application.routes.draw do
  resources :chapters
  resources :stories
  resources :jokes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
