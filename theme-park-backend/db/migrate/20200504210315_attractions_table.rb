class AttractionsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :attractions do |t|
      t.string :name
      t.integer :amount
      t.float :revenue
      t.integer :wait_time
      t.string :img_source
      t.integer :user_id
      t.integer :price
    end
  end
end
