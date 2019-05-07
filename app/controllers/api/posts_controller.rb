class Api::PostsController < ApplicationController

    def new 
        @post = Post.new 
    end  

    def index 
        @posts = Post.all 
    end

    def create 
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :index
        else  
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:user).permit(:author_id, :body)
    end
end
