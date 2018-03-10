require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe '#is_password' do
    it 'expects new to be ran on password digest'

    context 'incorrect password' do
      it 'returns false'
    end

    context 'correct password' do
      it 'returns true'
    end
  end

  describe '#reset_session_token' do
    it 'runs generates a random base64 strong'

    it 'sets and saves the randomized session token to the user'

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

end
