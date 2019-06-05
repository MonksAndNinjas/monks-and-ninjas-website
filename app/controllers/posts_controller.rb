class PostsController < ApplicationRecord
  def index
    posts = Post.all

    render(
      status: 200,
      json: posts
    )
  end
end
