class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.string :city
      t.string :state_code
      t.string :zip
      
      t.float :balance, default: 0

      t.timestamps
    end
  end
end
