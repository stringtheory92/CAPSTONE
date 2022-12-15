class ForumDiscussionTopicSerializer < ActiveModel::Serializer
  attributes :id, :heading, :created_at, :updated_at, :wrapped_sub_forum, :total_messages, :last_message_date

  belongs_to :creator
  belongs_to :sub_forum
  has_many :users

  def wrapped_sub_forum
    self.object.sub_forum
  end
  
  def total_messages 
    self.object.forum_topic_messages.count
  end
  
end
