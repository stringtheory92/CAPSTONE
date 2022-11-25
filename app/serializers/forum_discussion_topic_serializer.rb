class ForumDiscussionTopicSerializer < ActiveModel::Serializer
  attributes :id, :heading, :created_at, :updated_at

  belongs_to :user
  belongs_to :sub_forum
end
