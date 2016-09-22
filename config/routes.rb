Rails.application.routes.draw do
root "authentication#new"
get "welcome/games" => "welcome#games"
get "welcome/index" => "welcome#index", as: :index
get "welcome/createanaccount" => "welcome#createanaccount"
get '/sign-up' => 'registrations#new', as: :signup
post '/sign-up' => 'registrations#create'
get '/sign-in' => 'authentication#new', as: :signin
post '/sign-in' => 'authentication#create' 
get '/sign-out' => 'authentication#destroy', as: :signout
end
