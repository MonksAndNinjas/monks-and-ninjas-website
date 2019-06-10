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
project1 = Project.create(
             title: "CLI Data Gem",
             description: "This Ruby Gem provides a CLI to view the world's most popular martial arts taken from a www.singpatong-sitnumnoi.com; Users can also learn more information about the style such as (wiki-website, description, name, country, fighting-focus). styles, can be searched by country, or fighting-focus. I have also added code to collect incomplete data from the scrape if one has the desire to add code to retrieve it.",
             date: "June 7, 2019",
             github: "https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App",
             video: "https://www.youtube.com/watch?v=l0_jHQvCLZg&t=29s",
             embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l0_jHQvCLZg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             )

project2 = Project.create(
             title: "Sinatra App",
             description: "Welcome to Monks And Ninjas fitness site. Guests will see upcoming events, about us, teachers, and contact. If guest decides to signup, they will have access to our users section which includes connecting to our network of users, newsfeed, and posts. User will be able to create, destroy, read, and edit posts, as well as edit their account info. Sinatra and ActiveRecord are used to create the dynamic site.",
             date: "August 16, 2018",
             github: "https://github.com/MonksAndNinjas/monks-and-ninjas-sinatra",
             video: "https://www.youtube.com/watch?v=pw0EEr80du8",
             embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pw0EEr80du8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             )

project3 = Project.create(
             title: "Rails App",
             description: "The Monks and Ninjas Life Manager App allows users to efficiently structure and promote meaning in ones life. Once the app is setup the user will have access to recording family members, online subscriptions, short-term and long-term goals, weekly priorities, inspirations, and controlling bad habits.",
             date: "February 5, 2019",
             github: "https://github.com/MonksAndNinjas/rails-monks-and-ninjas",
             video: "https://www.youtube.com/watch?v=zQ3gvS1YwPo&t=291s",
             embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zQ3gvS1YwPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             )

project4 = Project.create(
             title: "Rails JavaScript App",
             description: "The Monks and Ninjas Life Manager App allows users to efficiently structure and promote meaning in ones life. Once the app is setup the user will have access to recording family members, online subscriptions, short-term and long-term goals, weekly priorities, inspirations, and controlling bad habits. The page 'my life', which are accessible through the icon on the top right of the screen is similar to all the other attribute pages except that it uses the Ruby code of those pages and implements it through Javascript. All the attributes and their features are accessible through just one page. The Javascript code makes use of Rails active model serializer and uses Javascript object models to make use of the JSON response. The page 'my quests' is also accessible through the icon on the top right of the screen. This page serves as a show page for the quests attribute and it display a bit more information than normal using Javascript                 to handle the data.",
             date: "March 18, 2019",
             github: "https://github.com/MonksAndNinjas/rails-monks-and-ninjas/tree/monks-and-ninjas-js",
             video: "https://www.youtube.com/watch?v=3veaiRz-DBA&t=171s",
             embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3veaiRz-DBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             )

project5 = Project.create(
             title: "React",
             description: "The Monks and Ninjas Fitness Blog/Appointment App allows visitors to make a reservation for a fitness appointment as well as read blog posts. Administrators can manage appointments and submit new blog posts or delete old ones.",
             date: "May 30, 2019",
             github: "https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App",
             video: "https://www.youtube.com/watch?v=P-v1Tc50bFs",
             embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P-v1Tc50bFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             )
