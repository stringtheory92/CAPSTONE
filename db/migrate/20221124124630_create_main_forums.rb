class CreateMainForums < ActiveRecord::Migration[7.0]
  def change
    create_table :main_forums do |t|
      t.string :category
      t.string :heading

      t.timestamps
    end
  end
end
