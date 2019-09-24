json.extract! @post, :body, :id, :created_at
json.comments do 
    json.array! @post.comments do |comment| 
        json.extract! comment, :id, :body
        json.author comment.author
    end 
end
