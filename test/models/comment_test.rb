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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
