# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mansion = House.create(address: Faker::Address.street_address)
med_house = House.create(address: Faker::Address.street_address)
small_house = House.create(address: Faker::Address.street_address)
beach_house = House.create(address: Faker::Address.street_address)
ranch_house = House.create(address: Faker::Address.street_address)

moistie = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie1 = Person.create(name: Faker::Name.first_name, house_id: med_house.id)
moistie2 = Person.create(name: Faker::Name.first_name, house_id: med_house.id)
moistie3 = Person.create(name: Faker::Name.first_name, house_id: med_house.id)
moistie4 = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie5 = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie6 = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie7 = Person.create(name: Faker::Name.first_name, house_id: small_house.id)
moistie8 = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie9 = Person.create(name: Faker::Name.first_name, house_id: ranch_house.id)
moistie10 = Person.create(name: Faker::Name.first_name, house_id: mansion.id)
moistie11 = Person.create(name: Faker::Name.first_name, house_id: beach_house.id)
