@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :id, :body, :created_at
        json.author post.author
        json.comments do 
            json.array! post.comments do |comment| 
                json.extract! comment, :id, :body
                json.author comment.author
            end 
        end
    end
end