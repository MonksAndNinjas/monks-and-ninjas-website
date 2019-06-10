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

#project1 = Project.create(
#             title: "CLI Data Gem",
#             date: "June 7, 2019",
#             github: https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App,
#             video: https://www.youtube.com/watch?v=l0_jHQvCLZg&t=29s,
#             embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/l0_jHQvCLZg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
#             )

#project2 = Project.create(
#             title: "Sinatra App",
#             date: August 16, 2018,
#             github: https://github.com/MonksAndNinjas/monks-and-ninjas-sinatra,
#             video: https://www.youtube.com/watch?v=pw0EEr80du8
#             embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/pw0EEr80du8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
#             )

#project3 = Project.create(
#             title: "Rails App",
#             date: February 5, 2019,
#             github: https://github.com/MonksAndNinjas/rails-monks-and-ninjas,
#             video: https://www.youtube.com/watch?v=zQ3gvS1YwPo&t=291s,
#             embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/zQ3gvS1YwPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
#             )

#project4 = Project.create(
#             title: "Rails JavaScript App",
#             date: March 18, 2019,
#             github: https://github.com/MonksAndNinjas/rails-monks-and-ninjas/tree/monks-and-ninjas-js, 
#             video: https://www.youtube.com/watch?v=3veaiRz-DBA&t=171s,
#             embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/3veaiRz-DBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
#             )

#project5 = Project.create(
#             title: "React",
#             date: May 30, 2019,
#             github: https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App,
#             video: https://www.youtube.com/watch?v=P-v1Tc50bFs
#             embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/P-v1Tc50bFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
#             )
