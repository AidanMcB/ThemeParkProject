class ButtonsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :buttons do |t|
      t.integer :value
    end
  end
end
