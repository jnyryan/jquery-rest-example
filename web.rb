require 'rubygems'
require 'json'
require 'sinatra'


get '/' do
  send_file "public/index.html"
end

get '/data' do
  @data = {:Project => {:Name=>"Heroku-WebApp", :Author=>"John Ryan"}}
  @data.to_json
end

post '/data' do
  puts @params
  @params.to_json
end
