require 'byebug'

class Board
  attr_accessor :cups, :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14){[]}
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..13).each do |i|
      if i == 6 || i == 13
        next
      else
        @cups[i] += [:stone, :stone, :stone, :stone]
      end
    end
  end

  def valid_move?(start_pos)
    if (start_pos < 0 || start_pos >= 13 || @cups[start_pos].empty? || start_pos == 6)
       raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    num_taken = @cups[start_pos].length
    @cups[start_pos] = []
    board_pos = start_pos + 1

    until num_taken == 0
          render
      if (current_player_name == @name1 && board_pos == 13)
        board_pos += 1
      elsif (current_player_name == @name2 && board_pos == 6)
        board_pos += 1
      elsif board_pos > 13
        board_pos = 0
      else
        @cups[board_pos] += [:stone]
        num_taken -= 1
        board_pos += 1
      end
    end

    next_turn(board_pos)
    return :switch if @cups[board_pos].empty?
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end

class InvalidPosError < ArgumentError
end
