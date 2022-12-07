class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.integer :user_id
      t.integer :forum_discussion_topic

      t.timestamps
    end
  end
end
