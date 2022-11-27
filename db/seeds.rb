ap 'Destroying Old Seed Data'

# User.destroy_all
# MainForum.destroy_all
# ClassifiedCategory.destroy_all
# ClassifiedForSale.destroy_all
# ForSaleMessage.destroy_all

ap "Old Data Destroyed"

ap "Seeding..."

# 10.times do
#     User.create(user_name: Faker::Name.first_name, password: "123")
# end

# ========== Forums ============================================================
# 3.times do
#     main_forum = MainForum.create(category: "[BG]", heading: Faker::Music.genre)
#     4.times do
#         sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
#         10.times do
#             ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, user_id: rand(1..10))
#         end
#     end
# end
# 3.times do
#     main_forum = MainForum.create(category: "[DB]", heading: Faker::Music.genre)
#     4.times do
#         sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
#         10.times do
#             ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, user_id: rand(1..10))
#         end
#     end
# end

# ========== Classifieds ============================================================
# upright = ClassifiedCategory.create(heading: 'Upright Basses')
# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6), city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: upright.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end

# bg = ClassifiedCategory.create(heading: 'Bass Guitars')
# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: bg.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end

# amp = ClassifiedCategory.create(heading: 'Amplifiers')
# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: amp.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end

# acc = ClassifiedCategory.create(heading: 'Accessories')
# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: acc.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end

ap "All Seeded!"