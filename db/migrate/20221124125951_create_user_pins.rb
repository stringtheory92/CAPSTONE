class CreateUserPins < ActiveRecord::Migration[7.0]
  def change
    create_table :user_pins do |t|
      t.string :user_id

      t.timestamps
    end
  end
end
