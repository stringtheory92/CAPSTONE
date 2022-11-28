# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_24_130739) do
  create_table "classified_categories", force: :cascade do |t|
    t.string "heading"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classified_for_sales", force: :cascade do |t|
    t.string "bass"
    t.integer "manufacture_year"
    t.string "status"
    t.integer "price"
    t.integer "strings"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "image"
    t.integer "views", default: 0
    t.integer "classified_category_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dms", force: :cascade do |t|
    t.string "content"
    t.integer "user_id"
    t.integer "inbox_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "for_sale_messages", force: :cascade do |t|
    t.string "content"
    t.string "media"
    t.integer "likes", default: 0
    t.integer "classified_for_sale_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "forum_discussion_topics", force: :cascade do |t|
    t.string "heading"
    t.string "sub_forum_id"
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "forum_topic_messages", force: :cascade do |t|
    t.string "content"
    t.string "media"
    t.integer "likes", default: 0
    t.integer "forum_discussion_topic_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inboxes", force: :cascade do |t|
    t.integer "new_messages"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "join_pins_topics", force: :cascade do |t|
    t.integer "user_pin_id"
    t.integer "topic_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "main_forums", force: :cascade do |t|
    t.string "category"
    t.string "heading"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sub_forums", force: :cascade do |t|
    t.string "heading"
    t.string "main_forum_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_pins", force: :cascade do |t|
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "password"
    t.string "image"
    t.float "balance", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
