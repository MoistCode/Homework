require 'rspec'
require 'homework'

RSpec.describe LRUCache do

  subject(:my_cache) {LRUCache.new(4)}

  before(:each) do
    my_cache.add([1,2,3])
    my_cache.add(5)
    my_cache.add(-5)
    my_cache.add({a: 1, b: 2, c: 3})
    my_cache.add([1,2,3,4])
    my_cache.add("I walk the line")
    my_cache.add(:ring_of_fire)
    my_cache.add("I walk the line")
    my_cache.add({a: 1, b: 2, c: 3})
  end

  describe '#initialize' do

    it 'sets max cache size to argument input' do
      expect(subject.max_cache).to eq(4)
    end

  end

  describe '#count' do


    it 'returns a count of 4' do
      my_cache.add([1,2,3])
      my_cache.add(5)
      my_cache.add(-5)
      my_cache.add({a: 1, b: 2, c: 3})

      expect(my_cache.count).to eq(4)

    end

    it 'never returns a count greater than 4' do
      expect(my_cache.count).to eq(4)
    end

  end

  describe '#add' do

    context 'when element is not already in the cache' do

      it 'adds to the end of the array'

      it 'removes the least used element'

    end

    context 'when element is included in the array' do

      it 'takes the element and places it at the end'

    end

  end

  describe '#show' do

      it 'prints out the cache list'

  end

end
