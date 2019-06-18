class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :author, null:false
      t.string :post, null:false
      t.text :body, null:false
      t.string :comment_author


      t.timestamps
    end
        add_index :comments, :author
        add_index :comments, :post
        add_index :comments, :comment_author 
  end
end
