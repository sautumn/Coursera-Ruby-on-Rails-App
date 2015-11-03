class CoursesController < ApplicationController
  def index
  	@search_term = params[:looking_for] || 'math'
  	@courses = Coursera.for(@search_term)
  end
end
