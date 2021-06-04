Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'hello/first' => 'hello#first'
  get 'hello/index' => 'hello#index'

  root 'hello#first'
end