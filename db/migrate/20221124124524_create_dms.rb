class CreateDms < ActiveRecord::Migration[7.0]
  def change
    create_table :dms do |t|
      t.string :content
      t.integer :user_id
      t.integer :inbox_id

      t.timestamps
    end
  end
end
