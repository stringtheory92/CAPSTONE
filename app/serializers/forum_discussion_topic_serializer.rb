class ForumDiscussionTopicSerializer < ActiveModel::Serializer
  attributes :id, :heading, :created_at, :updated_at, :wrapped_sub_forum, :wrapped_user

  belongs_to :user
  belongs_to :sub_forum

  def wrapped_sub_forum
    self.object.sub_forum
  end
  def wrapped_user
    self.object.user
  end
  
end
