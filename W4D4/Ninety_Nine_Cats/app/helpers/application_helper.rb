module ApplicationHelper

  def auth_token
    html = "<input type=\"authenticity_token\" value=\'#{form_authenticity_token}\'/>"
    html.html_safe
  end

end
