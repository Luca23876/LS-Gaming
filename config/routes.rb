Rails.application.routes.draw do
root"welcome#index"
get "welcome/games" => "welcome#games"
get "welcome/index" => "welcome#index"
get "welcome/createanaccount" => "welcome#createanaccount"
end
