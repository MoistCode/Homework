class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/cats'
    mail(to: user, subject: 'Did you bring the spam wasubi?')
  end

end
