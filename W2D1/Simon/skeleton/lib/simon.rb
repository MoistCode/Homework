class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @seq = []
    @game_over = false
  end

  def play
    take_turn until game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message
    @sequence_length += 1
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    gets.chomp
  end

  def add_random_color
    @seq.push(COLORS.sample)
  end

  def round_success_message
    puts "Success! Adding 1 more color."
  end

  def game_over_message
    puts "R.I.P."
  end

  def reset_game
    @sequence_length = 1
    @seq = []
    @game_over = false
  end

end
