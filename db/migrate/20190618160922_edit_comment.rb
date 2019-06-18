class EditComment < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :post, null:false
    remove_column :comments, :comment_author
    add_column :comments, :post, :integer
    add_column :comments, :album, :integer 
    add_column :comments, :comment, :integer
  end
end
