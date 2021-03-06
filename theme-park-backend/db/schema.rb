# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_04_210540) do

  create_table "attraction_upgrades", force: :cascade do |t|
    t.string "name"
    t.string "flavor_text"
    t.float "revenue_multiplier"
    t.boolean "purchased?"
    t.integer "price"
    t.integer "user_id"
  end

  create_table "attractions", force: :cascade do |t|
    t.string "name"
    t.integer "amount"
    t.float "revenue"
    t.integer "wait_time"
    t.string "img_source"
    t.integer "user_id"
    t.integer "price"
  end

  create_table "button_upgrades", force: :cascade do |t|
    t.integer "button_id"
    t.string "name"
    t.string "flavor_text"
    t.integer "click_multiplier"
    t.integer "price"
  end

  create_table "buttons", force: :cascade do |t|
    t.integer "value"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
  end

  create_table "wallets", force: :cascade do |t|
    t.float "money"
    t.string "img_src"
    t.integer "user_id"
  end

end
