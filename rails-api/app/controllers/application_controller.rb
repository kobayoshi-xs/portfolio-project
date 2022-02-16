class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Helpers

  helper_method :current_user, :user_signed_in?
  #skip_before_action :verify_authenticity_token
end
