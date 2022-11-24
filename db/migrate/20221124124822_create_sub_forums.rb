class CreateSubForums < ActiveRecord::Migration[7.0]
  def change
    create_table :sub_forums do |t|
      t.string :heading
      t.string :main_forum_id

      t.timestamps
    end
  end
end
