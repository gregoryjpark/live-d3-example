class VotesController < ApplicationController

  def index
    @votes = Vote.totals

    respond_to do |format|
      format.html
      format.json { render json: @votes }
    end
  end

  def create
    Vote.create(vote_params)
    @votes = Vote.totals 
    respond_to do |format|
      format.js
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:color)
  end

end