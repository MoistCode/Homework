class AddIndexToPerson < ActiveRecord::Migration[5.1]
  def change
    add_index :people, :name
  end
end
