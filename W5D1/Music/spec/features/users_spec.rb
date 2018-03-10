require 'rails_helper'

RSpec.feature "Users", type: :feature do

  feature 'the signup process' do

    scenario 'has a new user page' do
      visit new_user_url
      expect(page).to have_content "Create New User"
    end

    feature "signing up a user" do
      before(:each) do
        User.destroy_all
        visit new_user_url
        fill_in "user[email]", :with => 'timmy@turner.com'
        fill_in "user[password]", :with => 'password'
        click_on "Create New User"
      end

      scenario "redirects to users_url" do
        expect(page).to have_content "This is the main page. Are you ready for this shiznit!"
      end
    end

    feature "with an invalid user" do
      before(:each) do
        User.destroy_all
        visit new_user_url
        fill_in "user[email]", :with => 'tomm432432@fmskds.com'
        fill_in "user[password]", :with => ''
        click_on 'Create New User'
      end

      scenario 'rerenders the sign up page after invalid parameters' do
        expect(page).to have_content "Create New User"
      end
    end

  end

end
