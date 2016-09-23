Rails.application.routes.draw do
root "authentication#new"
get '/games' => 'welcome#games', as: :gamingpage
get '/welcome' => 'welcome#index', as: :mainpage
get '/sign-up' => 'registrations#new', as: :signup
post '/sign-up' => 'registrations#create'
get '/sign-in' => 'authentication#new', as: :signin
post '/sign-in' => 'authentication#create' 
get '/sign-out' => 'authentication#destroy', as: :signout
end
