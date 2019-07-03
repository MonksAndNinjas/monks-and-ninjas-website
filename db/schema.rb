# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_03_011547) do

  create_table "misc_skills", force: :cascade do |t|
    t.integer "profile_id"
    t.string "name"
    t.index ["profile_id"], name: "index_misc_skills_on_profile_id"
  end

  create_table "notes", force: :cascade do |t|
    t.integer "project_id"
    t.string "summary"
    t.index ["project_id"], name: "index_notes_on_project_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.string "datePublished"
    t.string "lastPublished"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "bio"
    t.string "summary"
    t.decimal "phone"
    t.string "email"
    t.string "github"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "date"
    t.string "github"
    t.string "video"
    t.string "embed"
  end

  create_table "technical_skills", force: :cascade do |t|
    t.integer "profile_id"
    t.string "name"
    t.index ["profile_id"], name: "index_technical_skills_on_profile_id"
  end

end
