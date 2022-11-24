class CreateInboxes < ActiveRecord::Migration[7.0]
  def change
    create_table :inboxes do |t|
      t.integer :new_messages
      t.integer :user_id

      t.timestamps
    end
  end
end
