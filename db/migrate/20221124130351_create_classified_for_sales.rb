class CreateClassifiedForSales < ActiveRecord::Migration[7.0]
  def change
    create_table :classified_for_sales do |t|
      t.string :bass
      t.integer :manufacture_year
      t.string :status
      t.integer :price
      t.integer :strings
      t.string :location
      t.string :country
      t.integer :views
      t.integer :classifieds_category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
