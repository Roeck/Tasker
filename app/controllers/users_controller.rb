class UsersController < ApplicationController

  # SIGN UP:

  get "/signup" do
    erb :"/users/signup.html"
  end

  post "/signup" do
    # Refresh page if an empty field gets request:
    if params[:name].empty? || params[:email].empty? || params[:password].empty?
      redirect "/signup"
    else
      # Else, create a new instance of user through params:
      @user = User.create(:name => params[:name], :email => params[:email], :password => params[:password])
      session[:user_id] = @user.id
      redirect "/tasks"
    end
  end

  # SIGN IN:

  # Sign In route:
  get "/signin" do
    erb :"/users/signin.html"
  end

  # Find existing user and redirect it to Tasks page:
  post "/signin" do
    @user = User.find_by(:name => params[:name])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect "/tasks"

      # If user is not registered, redirect it to Sign Up page:
    else
      flash[:message1] = "This user does not exist!"
      redirect "/signin"
    end
  end

  # EDIT USER

  get "/users/:id" do
    # Find user by id and redirect it to Edit page"
    @user = User.find_by(id: session[:user_id])
    if @user
      erb :"/users/edit.html"
    else
      redirect "/signin"
    end
  end

  patch "/users/:id" do
    # Raise params.find,
    # Find the task with the specific id:
    @user = User.find(params[:id])
    @user.update(name: params[:name], email: params[:email])
    redirect "/users/#{@user.id}"
  end

  # SIGN OUT

  get "/signout" do

    # If user is signed in, destroy session and redirect to Home page:

    if signed_in?
      session.destroy
      redirect "/"
    end
  end
end
