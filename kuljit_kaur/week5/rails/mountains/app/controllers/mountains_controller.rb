class MountainsController < ApplicationController
def index
    @mountains = Mountain.all
  end

def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :meters => params[:meters], :range => params[:range]
    redirect_to mountain_path(mountain.id) # show
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.meters = params[:meters]
    mountain.range = params[:range]
    mountain.save
    redirect_to mountain_path(mountain.id) # show
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
