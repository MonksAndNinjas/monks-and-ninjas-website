class ProfilesController < ApplicationController
  # posts data to be passed onto the React portion of the app
  def index
    @profiles = Profile.all

    @profileHash = @profiles.collect { |p| [p, p.technical_skills, p.misc_skills] }

    render(
      status: 200,
      json: @profileHash
    )
  end
end
