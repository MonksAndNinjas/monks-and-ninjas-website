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

###############################################################################



profile = Profile.create(
  bio: "Joseph Jimenez is a Los Angeles Native born to immigrant parents from Mexico and El Salvador.
  The rough Los Angeles neighborhood of his youth provided an essential backdrop to his development as
  his early years were spent either cocooned in his home, his playmates the video games, electronics, and cartoons that
  became his early inspirations, or at his local dojo practicing martial arts. At a young age Joseph’s
  interest in programing started to take form, tinkering with electronics trying to understand how
  they worked. Over the years Joseph nurtured these various disciplines allowing him to develop a unique voice
  that brings fullfillment in his life. Currently Joseph lives in Boulder, CO with his wife, 4 year old son, and
  dog.",
  summary: "Full stack web developer with a passion for problem solving, design, code-efficiency, and experimentation.
  Studying and running my own martial arts business has given me considerable experience in business building, leadership,
  teaching, marketing, and discipline, skills that translate to any business. With experience in Ruby on Rails, JavaScript,
  and React and a background in P5.js and C++, I discovered web development by continuing to pursue my academic interests
  since my days working at a physics lab. I am excited to bring together all my skills and help companies enhance or
  develop a sharp brand that doesn't distract from their vision and user experience.",
  phone: "720.220.1556",
  email: "joseph@monksandninjas.com",
  github: "https://github.com/MonksAndNinjas"
)

tSkill1 = profile.technical_skills.build(name: "Ruby")
tSkill2 = profile.technical_skills.build(name: "Rails")
tSkill3 = profile.technical_skills.build(name: "SQL")
tSkill4 = profile.technical_skills.build(name: "Active Record")
tSkill5 = profile.technical_skills.build(name: "JavaScript")
tSkill6 = profile.technical_skills.build(name: "React")
tSkill7 = profile.technical_skills.build(name: "P5.js")
tSkill8 = profile.technical_skills.build(name: "C++")
tSkill9 = profile.technical_skills.build(name: "Photoshop")
tSkill10 = profile.technical_skills.build(name: "Illustrator")
tSkill11 = profile.technical_skills.build(name: "Inkscape")
tSkill12 = profile.technical_skills.build(name: "Linux")

mSkill1 = profile.misc_skills.build(name: "Hard Sciences: Physics and Math")
mSkill2 = profile.misc_skills.build(name: "Fitness business owner")
mSkill3 = profile.misc_skills.build(name: "Fluent in Spanish")
mSkill4 = profile.misc_skills.build(name: "Black Belt Martial Artist")

profile.save

###############################################################################

project1 = Project.create(
  title: "CLI Data Gem",
  description: "This Ruby Gem provides a CLI to view the world’s most popular martial arts, providing information on country, fighting-focus, and style",
  date: "June 7, 2019",
  github: "https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App",
  video: "https://www.youtube.com/watch?v=l0_jHQvCLZg&t=29s",
  embed: "l0_jHQvCLZg"
)

note1Project1 = project1.notes.build(summary: "Developed a Ruby CLI GEM for interfacing with the application")
note2Project1 = project1.notes.build(summary: "Utilized Nokogiri to scrape data from websites")
note3Project1 = project1.notes.build(summary: "Implemented Ruby variable scopes, object instantiation, and iterated collections to manipulate data")

project1.save

################################################################################3

project2 = Project.create(
             title: "Sinatra App",
             description: "Fitness site where guests will see upcoming events, about us, teachers, and contact. If guest decides to signup, they will have access to our users section which includes connecting to our network of users, newsfeed, and posts. User will be able to create, destroy, read, and edit posts, as well as edit their account info.",
             date: "August 16, 2018",
             github: "https://github.com/MonksAndNinjas/monks-and-ninjas-sinatra",
             video: "https://www.youtube.com/watch?v=pw0EEr80du8",
             embed: "pw0EEr80du8"
             )

note1Project2 = project2.notes.build(summary: "Developed forms to collect user data and create account")
note2Project2 = project2.notes.build(summary: "Incorporated routes to display and collect data")
note3Project2 = project2.notes.build(summary: "Utilized basic login to manage user data")

project2.save

#################################################################################

project3 = Project.create(
             title: "Rails App",
             description: "Life Manager App allows users to manage online subscriptions, relationships, goals, to-do list, inspirations and control bad habits.",
             date: "February 5, 2019",
             github: "https://github.com/MonksAndNinjas/rails-monks-and-ninjas",
             video: "https://www.youtube.com/watch?v=zQ3gvS1YwPo&t=291s",
             embed: "zQ3gvS1YwPo"
             )

note1Project3 = project3.notes.build(summary: "Utilized OmniAuth and Facebook to manage user authentication")
note2Project3 = project3.notes.build(summary: "Incorporated Active Record Associations and nested routes")
note3Project3 = project3.notes.build(summary: "Implemented Rails Active Record to persist and manage user data")

project3.save

#######################################################################################

project4 = Project.create(
             title: "Rails JavaScript App",
             description: "Life Manager App allows users to manage online subscriptions, relationships, goals, to-do list, inspirations and control bad habits.",
             date: "March 18, 2019",
             github: "https://github.com/MonksAndNinjas/rails-monks-and-ninjas/tree/monks-and-ninjas-js",
             video: "https://www.youtube.com/watch?v=3veaiRz-DBA&t=171s",
             embed: "3veaiRz-DBA"
             )

note1Project4 = project4.notes.build(summary: "Utilized Active Record Serializer to pass data from Rails backend in JSON format")
note2Project4 = project4.notes.build(summary: "Incorporated JavaScript to render data dynamically and handle JSON responses")
note3Project4 = project4.notes.build(summary: "Utlized JavaScript to create one page dynamic routes")
note4Project4 = project4.notes.build(summary: "Developed a Rails backend consisting of nested routes for the various attributes")

project4.save

##################################################################################

project5 = Project.create(
             title: "React",
             description: "Fitness Blog/Appointment App allows visitors to make reservations for a fitness appointment as well as read blog posts. Administrators canmanage appointments and submit new blog posts or delete old ones.",
             date: "May 30, 2019",
             github: "https://github.com/MonksAndNinjas/Monks-and-Ninjas-React-App",
             video: "https://www.youtube.com/watch?v=P-v1Tc50bFs",
             embed: "P-v1Tc50bFs"
             )

note1Project5 = project5.notes.build(summary: "Developed a Rails API backend with endpoints for appointments and blog posts")
note2Project5 = project5.notes.build(summary: "Developed ReactJS frontend to render data from API")
note3Project5 = project5.notes.build(summary: "Implemented user interface employing React and Redux to connect to store")
note4Project5 = project5.notes.build(summary: "Utilized JS fetch calls and promises to retrieve and handle JSON data from API ")

project5.save

####################################################################################
