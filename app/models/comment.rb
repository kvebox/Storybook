# == Schema Information
#
# Table name: comments
#
#  id             :bigint           not null, primary key
#  body           :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  comment_author :integer
#  post_id        :integer
#  album_id       :integer
#  comment_id     :integer
#

class Comment < ApplicationRecord
    validates :body, presence: true
    validates :comment_author, presence: true 

    belongs_to :author,
    primary_key: :id,
    foreign_key: :comment_author,
    class_name: :User 

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post 

    # belongs_to :album,
    # primary_key: :id,
    # foreign_key: :album,
    # class_name: :Album 

    # belongs_to :comment,
    # primary_key: :id,
    # foreign_key: :comment,
    # class_name: :Comment 
    
end
