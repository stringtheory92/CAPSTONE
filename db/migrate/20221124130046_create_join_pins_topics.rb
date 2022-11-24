class CreateJoinPinsTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :join_pins_topics do |t|
      t.integer :user_pin_id
      t.integer :topic_id

      t.timestamps
    end
  end
end
