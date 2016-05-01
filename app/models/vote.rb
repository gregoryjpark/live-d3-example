class Vote < ActiveRecord::Base

  def self.totals
    [Vote.where(color: 'red').count, Vote.where(color: 'blue').count]
  end
end
