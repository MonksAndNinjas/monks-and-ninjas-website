# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# test blog post
date = Time.now.strftime("%A, %d %Y - %T - %Z")
post = Post.create(title: 'test', content: 'this is a test post', datePublished: date, lastPublished: date)


# projects for portfolios

#project1 = Project.create(title: "React App", date: --, github: --, video: --, link: --)
#project2 = Project.create(title: "JavaScript App", date: --, github: --, video: --, link: --)
