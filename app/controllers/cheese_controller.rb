before_filter :authenticate_user, :exept => []

def authenticate_uset
  if current_user.present?
  	@chesses = cheese.all
  else
  	flash[:message] = "You must log in or register before access is grated to use this page "
  	redirect_to root_path
  end	
end