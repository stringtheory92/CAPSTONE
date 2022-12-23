ap 'Destroying Old Seed Data'

ForumDiscussionTopic.destroy_all
User.destroy_all
MainForum.destroy_all
ClassifiedCategory.destroy_all
ClassifiedForSale.destroy_all
ForSaleMessage.destroy_all

ap "Old Data Destroyed"

ap "Seeding..."

# 10.times do
#     User.create(user_name: Faker::Name.first_name, password_digest: User.digest('123'))
# end
10.times do
    User.create(user_name: Faker::Name.first_name, password: "123", city: Faker::Address.city, state_code: Faker::Address.state_abbr, zip: Faker::Address.zip_code[0..4])
end

# manny = User.create(user_name: 'Manny', password_digest: User.digest('123'))
manny = User.create(user_name: 'Manny', password: '123', city: "New York", state_code: "NY", zip: '10030')

manny.avatar.attach(
    io: File.open('./public/avatars/boy-sunglasses.jpg'),
    filename: 'boy-sunglasses.jpg',
    content_type: 'application/jpg'
)


# ========== Forums ============================================================
# === MAIN
bg_general = MainForum.create(category: "[BG]", heading: "General Forums")
bg_classified = MainForum.create(category: "[BG]", heading: "Classifieds [BG]")
db_general = MainForum.create(category: "[DB]", heading: "General Forums")
db_classified = MainForum.create(category: "[DB]", heading: "Classifieds [DB]")

# === Sub_BG
bg_basses = SubForum.create(heading: "Basses", main_forum_id: bg_general.id)
bg_effects = SubForum.create(heading: "Effects", main_forum_id: bg_general.id)
bg_repair = SubForum.create(heading: "Repair", main_forum_id: bg_general.id)
bg_setup = SubForum.create(heading: "Hardware/Setup", main_forum_id: bg_general.id)
bg_technique = SubForum.create(heading: "Technique", main_forum_id: bg_general.id)
bg_humor = SubForum.create(heading: "Bass Humor/Stories", main_forum_id: bg_general.id)
bg_amps = SubForum.create(heading: "Amps/Cabs", main_forum_id: bg_general.id)
bg_bassists = SubForum.create(heading: "Bassists", main_forum_id: bg_general.id)
bg_recording = SubForum.create(heading: "Recording Gear", main_forum_id: bg_general.id)
bg_instruction = SubForum.create(heading: "General Instruction", main_forum_id: bg_general.id)
bg_meetups = SubForum.create(heading: "Meetups", main_forum_id: bg_general.id)
bg_Notation = SubForum.create(heading: "Notation", main_forum_id: bg_general.id)
bg_off_topic = SubForum.create(heading: "Off Topic", main_forum_id: bg_general.id)

# === Sub_DB
db_basses = SubForum.create(heading: "Basses", main_forum_id: db_general.id)
db_strings = SubForum.create(heading: "Strings", main_forum_id: db_general.id)
db_repair = SubForum.create(heading: "Luthier's Corner", main_forum_id: db_general.id)
db_setup = SubForum.create(heading: "Hardware/Setup", main_forum_id: db_general.id)
db_classical_technique = SubForum.create(heading: "Classical Technique", main_forum_id: db_general.id)
db_auditions = SubForum.create(heading: "Orchestral Auditions", main_forum_id: db_general.id)
db_jazz_technique = SubForum.create(heading: "Jazz Technique", main_forum_id: db_general.id)
db_pedagogy = SubForum.create(heading: "Pedagogy", main_forum_id: db_general.id)
db_bows = SubForum.create(heading: "Bows/Rosin", main_forum_id: db_general.id)
db_amps = SubForum.create(heading: "Amps/Mics/Pickups", main_forum_id: db_general.id)
db_bassists = SubForum.create(heading: "Bassists", main_forum_id: db_general.id)
db_recording = SubForum.create(heading: "Recording Gear", main_forum_id: db_general.id)
db_instruction = SubForum.create(heading: "General Instruction", main_forum_id: db_general.id)
db_humor = SubForum.create(heading: "Bass Humor/Stories", main_forum_id: db_general.id)
db_meetups = SubForum.create(heading: "Meetups", main_forum_id: db_general.id)
db_Notation = SubForum.create(heading: "Notation", main_forum_id: db_general.id)
db_off_topic = SubForum.create(heading: "Off Topic", main_forum_id: db_general.id)



# 3.times do
#     main_forum = MainForum.create(category: "[BG]", heading: Faker::Music.genre)
#     4.times do
#         sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
#         10.times do
#             ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, creator_id: rand(1..10))
#         end
#     end
# end
# 3.times do
#     main_forum = MainForum.create(category: "[DB]", heading: Faker::Music.genre)
#     4.times do
#         sub_forum = SubForum.create(heading: Faker::Music.band, main_forum_id: main_forum.id)
#         10.times do
#             ForumDiscussionTopic.create(heading: Faker::Music.album, sub_forum_id: sub_forum.id, creator_id: rand(1..10))
#         end
#     end
# end

# ========== Classifieds ============================================================
upright = ClassifiedCategory.create(heading: 'Upright Basses')
10.times do
    ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6), city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: upright.id, user_id: rand(1..10))
    ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
end

bg = ClassifiedCategory.create(heading: 'Bass Guitars')
10.times do
    ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: bg.id, user_id: rand(1..10))
    ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
end

amp = ClassifiedCategory.create(heading: 'Amplifiers')
10.times do
    ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: amp.id, user_id: rand(1..10))
    ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
end

acc = ClassifiedCategory.create(heading: 'Accessories')
10.times do
    ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: acc.id, user_id: rand(1..10))
    ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
end
ubfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 1, user_id: rand(1..10))
    ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ubfs.id, user_id: rand(1..10))
    ubfs.pic.attach(
        io: File.open('public/for_sale/upbass1_full.jpeg'),
        filename: 'upbass1_full.jpeg',
        content_type: 'application/jpg'
    )

bgfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 2, user_id: rand(1..10))
        ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: bgfs.id, user_id: rand(1..10))
        bgfs.pic.attach(
            io: File.open('public/for_sale/Jap-Fodera-bg.jpeg'),
            filename: 'Jap-Fodera-bg.jpeg',
            content_type: 'application/jpg'
        )
ampfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 3, user_id: rand(1..10))
            ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ampfs.id, user_id: rand(1..10))
            ampfs.pic.attach(
                io: File.open('public/for_sale/amp-small2.jpeg'),
                filename: 'amp-small2.jpeg',
                content_type: 'application/jpg'
            )
accfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 4, user_id: rand(1..10))
                ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: accfs.id, user_id: rand(1..10))
                accfs.pic.attach(
                    io: File.open('public/for_sale/accessories.jpeg'),
                    filename: 'accessories.jpeg',
                    content_type: 'application/jpg'
                )
ap "All Seeded!"