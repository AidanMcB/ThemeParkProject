class ButtonUpgradesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :button_upgrades do |t|
      t.integer :button_id
      t.string :name
      t.string :flavor_text
      t.integer :click_multiplier
      t.integer :price
    end
  end
end
