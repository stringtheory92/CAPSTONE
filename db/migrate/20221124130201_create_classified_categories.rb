class CreateClassifiedCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :classified_categories do |t|
      t.string :heading

      t.timestamps
    end
  end
end
