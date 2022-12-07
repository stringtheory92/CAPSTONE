class CreateForumDiscussionTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_discussion_topics do |t|
      t.string :heading
      t.integer :sub_forum_id
      # t.integer :user_id
      t.references :creator, references: :users, foreign_key: {to_table: :users}


      t.timestamps
    end
  end
end
