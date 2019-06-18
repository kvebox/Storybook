@comments.each do |comment| 
    json.set! comment.id do 
        json.extract! comment, :id, :body, :created_at
    end
end