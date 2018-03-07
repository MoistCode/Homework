# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, :presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  # Takes in username and password and return matching user
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    # Checks to see if the username and password matches
    if user && BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    else
      return nil
    end
  end

  # Generates a 16-digit pseudorandom string
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  # Resets the user's session token an saves the user
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  # Makes sure the user has a token
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  # Sets instance variable 'password' to the argument then encrypts and saves
  # as the users password digest
  # Requires attr_reader for password for validation to occur
  def password=(new_pw)
    @password = new_pw
    self.password_digest = BCrypt::Password.create(new_pw)
  end

end
