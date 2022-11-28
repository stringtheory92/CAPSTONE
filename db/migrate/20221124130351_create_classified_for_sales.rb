class CreateClassifiedForSales < ActiveRecord::Migration[7.0]
  def change
    create_table :classified_for_sales do |t|
      t.string :bass
      t.integer :manufacture_year
      t.string :status
      t.integer :price
      t.integer :strings
      t.string :city
      t.string :state
      t.string :country
      t.string :image
      t.integer :views, default: 0
      t.integer :classified_category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
