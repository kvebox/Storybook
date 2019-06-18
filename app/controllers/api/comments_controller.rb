class Api::CommentsController < ApplicationController
    def new 
        @comment = Comment.new 
    end  

    def index 
        @comments = Comment.all 
    end

    def create 
        @comments = Comment.all
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            # render :index
            render :show
        else  
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def edit
        @comment = Comment.find(params[:id])
        render :edit
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else  
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy 

    end
    

    private
    def comment_params
        params.require(:comment).permit(:author, :body)
    end
    
end
