class CreateForumDiscussionTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_discussion_topics do |t|
      t.string :heading
      t.integer :sub_forum_id
      t.datetime :last_message_date
      
      # Rails looks for :creator alias declaration in the model and connects the 
      # foreign_key name (also declared in the model) with the foreign_key direction
      # set here. Model names it "creator_id" and migration directs it to users table
      t.references :creator, references: :users, foreign_key: {to_table: :users}


      t.timestamps
    end
  end
end
