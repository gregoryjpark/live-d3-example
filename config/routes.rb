Rails.application.routes.draw do

  root 'votes#index'
  resources :votes, only: [:index, :create]

end
