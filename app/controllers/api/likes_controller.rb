class Api::LikesController < ApplicationController

    def new 
        @like = Like.new 
    end 

    def index
        @likes = Like.all 
    end 

    def create 
        @likes = Like.all 
        @like = Like.new(like_params)
        if @like.save 
            render :show 
        else 
            render json: @like.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @like = Like.find(params[:id])
        @like.destroy 
    end 

    private 
    def like_params 
        params.require(:like).permit(:liker_id)
    end
    
end
