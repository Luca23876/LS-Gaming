class RegistrationsController < ApplicationController

	def new
	@user = User.new
	end

	def create
		@user = User.new(params.require(:user).permit(:email, :password,
:password_confirmation))
	if @user.save
		session[:user_id] = @user.id
		redirect_to mainpage_path
	else
		@sign_in_error
	   render :new
	end
	end

	end   		