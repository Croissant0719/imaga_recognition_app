# frozen_string_literal: true

# This is UserController
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # @user = User.new(user_params)
    @user = User.new
    @user.name = params[:name]
    @user.email = params[:email]
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirmation]

    logger.info "### user_param: #{user_params}"

    if @user.save!
      redirect_to root_url, notice: "Create new user: #{@user.name} !"
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
