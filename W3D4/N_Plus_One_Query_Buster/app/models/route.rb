# == Schema Information
#
# Table name: routes
#
#  id         :integer          not null, primary key
#  number     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Route < ApplicationRecord
  has_many :buses,
    class_name: 'Bus',
    foreign_key: :route_id,
    primary_key: :id

  def n_plus_one_drivers
    buses = self.buses

    all_drivers = {}
    buses.each do |bus|
      drivers = []
      # This is where we're loading drivers again
      bus.drivers.each do |driver|
        drivers << driver.name
      end

      all_drivers[bus.id] = drivers
    end

    all_drivers
  end

  def better_drivers_query
    better = self.buses.includes(:drivers)
    better_hsh = {}

    better.each do |bus|

      drivers_arr = []

      bus.drivers.each do |driver|
        drivers_arr << driver.name
      end

      better_hsh[bus.id] = drivers_arr

    end

    better_hsh

  end
end
