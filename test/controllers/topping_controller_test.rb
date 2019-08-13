require 'test_helper'

class ToppingControllerTest < ActionDispatch::IntegrationTest
  test "should get pizza" do
    get topping_pizza_url
    assert_response :success
  end

end
