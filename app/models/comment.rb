# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post       :integer
#  album      :integer
#  comment    :integer
#  author     :integer          not null
#

class Comment < ApplicationRecord
    validates :body, presence: true
    validates :author, presence: true 

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User 

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post,
    class_name: :Post 

    belongs_to :album,
    primary_key: :id,
    foreign_key: :album,
    class_name: :Album 

    belongs_to :comment,
    primary_key: :id,
    foreign_key: :comment,
    class_name: :Comment 
    
end
