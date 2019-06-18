class EditComment2 < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :album 
    add_index :comments, :post
    add_index :comments, :comment 
    remove_column :comments, :author, null:false 
    add_column :comments, :author, :integer, null:false
  end
end
