class ProjectsController < ApplicationController
  # posts data to be passed onto the React portion of the app
  def index
    @projects = Project.all

    @projectsHash = @projects.collect { |p| [p, p.notes] }

    render(
      status: 200,
      json: @projectsHash
    )
  end
end
