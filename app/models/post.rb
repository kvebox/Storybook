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
end
