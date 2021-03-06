require 'rails_helper'

feature 'visiting the prototype show page' do
  let!(:prototype) { create(:prototype) }
  let!(:admin) { create(:admin) }
  scenario "when visiting the page the prototype's height is present" do
    page.set_rack_session(user_id: admin.id)
    visit "/prototypes/#{prototype.id}"
    expect(page).to have_content(prototype.height)
  end
end
