class CreateForumDiscussionTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_discussion_topics do |t|
      t.string :heading
      t.string :sub_forum_id
      t.string :user_id

      t.timestamps
    end
  end
end
