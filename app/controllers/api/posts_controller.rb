class Api::PostsController < ApplicationController

    def new 
        @post = Post.new 
    end  

    def index 
        # @posts = User.find(params[])
        @posts = Post.all 
        # Post.find(params[:id])
    end

    def create 
        @posts = Post.all
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else  
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :edit
        else  
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy 

    end
    

    private
    def post_params
        params.require(:post).permit(:author_id, :body)
    end
end
