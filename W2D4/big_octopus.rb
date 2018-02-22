#Find the longest fish in an array of fish in O(n^2)

class Array

  def sluggish_octopus
    longest_fish = ""
    self.each_with_index do |el1, idx1|
      self.each_with_index do |el2, idx2|
        if el1.length > el2.length && el1.length > longest_fish.length
          longest_fish = el1
        elsif el1.length < el2.length && el2.length > longest_fish.length
          longest_fish = el2
        end
      end
    end
    longest_fish
  end

  def dominant_octopus(&prc)
    return self if self.length == 1

    prc ||= Proc.new{|num1, num2| num1 <=> num2}

    mid = self.length / 2
    sorted_left = self[0...mid].dominant_octopus(&prc)
    sorted_right = self[mid..-1].dominant_octopus(&prc)

    Array.merging_octopus(sorted_left, sorted_right, &prc)
  end

  def clever_octopus
    longest = ''
    self.each {|fish| longest = fish if fish.length > longest.length}
    longest
  end

  def slow_dance(target, arr)
    return_idx = nil
    arr.each_with_index {|el, idx| return_idx = idx if el == target}
    return_idx
  end

  private

  def self.merging_octopus(left, right, &prc)
    arr = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        arr << left.shift
      when 0
        arr << left.shift
      when 1
        arr << right.shift
      end
    end

    arr + left + right
  end

end

arr = ['fish',
       'fiiish',
       'fiiiiish',
       'fiiiish',
       'fffish',
       'ffiiiiisshh',
       'fsh',
       'fiiiissshhhhhh'
      ]
block = Proc.new {|length1, length2| length1.length <=> length2.length}
p arr.sluggish_octopus
p arr.dominant_octopus(&block).last
p arr.clever_octopus

tiles_array = ["up", "right-up", "right", "right-down", "down",         "left-down", "left",  "left-up" ]

p slow_dance("up", tiles_array)
