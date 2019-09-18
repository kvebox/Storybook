# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  post_id    :integer
#  comment_id :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :liker_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post 

    belongs_to :comment,
    primary_key: :id,
    foreign_key: :comment_id;
    class_name: :Comment 

    # belongs_to :photo,
    # primary_key: :id,
    # foreign_key: :photo_id;
    # class_name: :Photo 
end
