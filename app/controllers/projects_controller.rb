class ProjectsController < ApplicationController
  # posts data to be passed onto the React portion of the app
  def index
    @projects = Project.all

    render(
      status: 200,
      json: @projects
    )
  end
end
