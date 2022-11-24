class CreateForumTopicMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_topic_messages do |t|
      t.string :content
      t.string :media
      t.integer :likes
      t.integer :forum_discussion_topic_id
      t.integer :user_id

      t.timestamps
    end
  end
end
