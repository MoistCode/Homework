# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  def n_plus_one_tracks
    start = Time.now
    albums = self.albums
    tracks_count = {}

    albums.each do |album|
      tracks_count[album.title] = album.tracks.length
    end
    
    puts "#{(Time.now - start) * 1000}"
    tracks_count

  end

  def better_tracks_query
    start = Time.now
    albums_and_tracks = self.albums.includes(:tracks)
    track_count = {}

    albums_and_tracks.each do |el|
      track_count[el.title] = el.tracks.length
    end

    puts "#{(Time.now - start) * 1000}"
    track_count

  end
end
