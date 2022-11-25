ap "Seeding..."

10.times do
    User.create(user_name: Faker::Name.first_name, password: "123")
end

ap "All Seeded!"