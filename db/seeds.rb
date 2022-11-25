ap 'Destroying Old Seed Data'

User.destroy_all
MainForum.destroy_all

ap "Old Data Destroyed"

ap "Seeding..."

10.times do
    User.create(user_name: Faker::Name.first_name, password: "123")
end

3.times do
    MainForum.create(category: "[BG]", heading: Faker::Music.band)
end
3.times do
    MainForum.create(category: "[DB]", heading: Faker::Music.band)
end


ap "All Seeded!"