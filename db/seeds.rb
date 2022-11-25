ap 'Destroying Old Seed Data'

User.destroy_all
MainForum.destroy_all

ap "Old Data Destroyed"

ap "Seeding..."

10.times do
    User.create(user_name: Faker::Name.first_name, password: "123")
end

# ========== Forums ============================================================
3.times do
    main_forum = MainForum.create(category: "[BG]", heading: Faker::Music.genre)
    4.times do
        sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
        10.times do
            ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, user_id: rand(1..10))
        end
    end
end
3.times do
    main_forum = MainForum.create(category: "[DB]", heading: Faker::Music.genre)
    4.times do
        sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
        10.times do
            ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, user_id: rand(1..10))
        end
    end
end


ap "All Seeded!"