class VotesController < ApplicationController

  def index
    @vote = Vote.new
    @votes = Vote.totals

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