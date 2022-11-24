class CreateForSaleMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :for_sale_messages do |t|
      t.string :content
      t.string :media
      t.integer :likes
      t.integer :classifieds_for_sale_id
      t.integer :user_id

      t.timestamps
    end
  end
end
