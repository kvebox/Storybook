# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  birthday        :string
#  gender          :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :first_name, :last_name, :password_digest, :session_token, presence:true
    validates :email, :session_token, uniqueness: true     
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password 

    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.create(password).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        (user && user.is_password?(password)) ? user : nil 
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save 
        self.session_token
    end

    has_one_attached :profilePic

    has_many :posts

    has_many :comments,
    primary_key: :id,
    foreign_key: :comment_author,
    class_name: :Comment


# a.profilePic.attach(io: File.open("/Users/vjoh/Desktop/vj_propic.jpg"), filename: "vj_propic.jpg")
end
