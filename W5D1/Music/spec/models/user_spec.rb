require 'rails_helper'

RSpec.describe User, type: :model do
  User.destroy_all
  valid_user = User.create!(email: 'tommy@tommy.com', password: 'password')

  describe 'password=' do
    it 'does not save password to database' do
      user = User.find_by(email: 'tommy@tommy.com')
      expect(user.password).not_to eq('password')
    end

    context 'incorrect password' do
      it 'returns false' do
        expect(valid_user.is_password?('cowman')).to be(false)
      end
    end

    context 'correct password' do
      it 'returns true' do
        expect(valid_user.is_password?('password')).to be(true)
      end
    end
  end

  describe '#reset_session_token' do
    user = User.find_by(email: 'tommy@tommy.com')

    it 'generates a random session token when resetted' do
      first_session = user.session_token
      user.reset_session_token!
      expect(first_session).not_to eq(user.session_token)
    end

    it 'sets and saves the randomized session token to the user' do
      user.reset_session_token!
      expect(user.session_token).not_to be(nil)
    end

    it 'returns the generated session token'
  end

  describe '::find_by_credentials' do
    context 'invalid email or password' do
      it 'returns nil'
    end

    context 'valid email and password' do
      it 'returns the user object if the password and email are correct'
    end
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
end
