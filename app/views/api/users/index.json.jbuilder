@users.each do |user|
    json.extract! user, :email 
end