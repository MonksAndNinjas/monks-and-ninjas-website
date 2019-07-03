class ProfilesController < ApplicationController
  # posts data to be passed onto the React portion of the app
  def index
    @profiles = Profile.all

    render(
      status: 200,
      json: @profiles
    )
  end
end
