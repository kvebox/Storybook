class FixCommentModel < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :author
    add_column :comments, :comment_author, :integer
    remove_column :comments, :post
    remove_column :comments, :comment 
    remove_column :comments, :album 
    add_column :comments, :post_id, :integer 
    add_column :comments, :album_id, :integer
    add_column :comments, :comment_id, :integer 
  end
end
