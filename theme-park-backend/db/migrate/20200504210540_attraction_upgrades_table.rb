class AttractionUpgradesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :attraction_upgrades do |t|
      t.string :name
      t.string :flavor_text
      t.float :revenue_multiplier
      t.boolean :purchased?
      t.integer :price
      t.integer :attraction_id
    end
  end
end
