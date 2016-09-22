Rails.application.routes.draw do
root "authentication#new"
#get "welcome/games" => "welcome#games"
get '/welcome' => 'welcome#index', as: :mainpage
#get "welcome/createanaccount" => "welcome#createanaccount"
get '/sign-up' => 'registrations#new', as: :signup
post '/sign-up' => 'registrations#create'
get '/sign-in' => 'authentication#new', as: :signin
post '/sign-in' => 'authentication#create' 
get '/sign-out' => 'authentication#destroy', as: :signout
end
