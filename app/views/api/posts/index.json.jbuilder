@posts.each do |post| 
    json.set! post.id do 
        json.extract! post, :body 
        json.author post.author
    end
end