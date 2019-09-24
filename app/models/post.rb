# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many :comments,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment
end
