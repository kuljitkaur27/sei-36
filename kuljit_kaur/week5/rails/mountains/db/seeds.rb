Mountain.destroy_all
Mountain.create :name =>'Mount Everest', :meters=> 8848, :range => 'Himalayas'
Mountain.create :name =>'K2', :meters=> 8611, :range => 'Karakoram'


puts "#{Mountain.count} mountains ."
