class AuthenticationController < ApplicationController

		def create
		user - User.find_by_email(params[:email])
		if user && user.authentication(params[:password])
				session[:user_id] = user.id
				redirect_to welcome_index
		else
		

"Username / password combination is invalid"
				render :new
		end
		end	

		def destroy
		session.clear
		redirect_to root_path
		end	
		
		end					
