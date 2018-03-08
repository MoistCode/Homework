class ApplicationMailer < ActionMailer::Base
  default from: 'everybody@applacademy.io'
  layout 'mailer'

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/cats'
    mail(to: user.email, subject: 'Did you bring the spam wasubi?')
  end


end
