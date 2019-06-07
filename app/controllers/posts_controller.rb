class PostsController < ApplicationController
  # posts data to be passed onto the React portion of the app
  def index
    @posts = Post.all

    render(
      status: 200,
      json: @posts
    )
  end
end
