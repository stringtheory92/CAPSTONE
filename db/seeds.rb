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
scott = User.create(user_name: 'Scott', password: '123', city: "Los Angeles", state_code: "CA", zip: '90001')
scott.avatar.attach(
    io: File.open('./public/avatars/boy-circle.jpg'),
    filename: 'boy-circle.jpg',
    content_type: 'application/jpg'
)
hal = User.create(user_name: 'Hal', password: '123', city: "Nashville", state_code: "TN", zip: '37011')
hal.avatar.attach(
    io: File.open('./public/avatars/boy-blue.jpg'),
    filename: 'boy-blue.jpg',
    content_type: 'application/jpg'
)
matthew = User.create(user_name: 'Matthew', password: '123', city: "Miami", state_code: "FL", zip: '33101')
matthew.avatar.attach(
    io: File.open('./public/avatars/boy-kid.jpg'),
    filename: 'boy-blue.jpg',
    content_type: 'application/jpg'
)
rikki = User.create(user_name: 'Rikki', password: '123', city: "New York", state_code: "NY", zip: '10030')
rikki.avatar.attach(
    io: File.open('./public/avatars/girl-rainbow.jpg'),
    filename: 'girl-rainbow.jpg',
    content_type: 'application/jpg'
)
calvin = User.create(user_name: 'Calvin', password: '123', city: "Chicago", state_code: "IL", zip: '60007')
calvin.avatar.attach(
    io: File.open('./public/avatars/boy-red.jpg'),
    filename: 'boy-red.jpg',
    content_type: 'application/jpg'
)
lakshmi = User.create(user_name: 'Lakshmi', password: '123', city: "Santa Monica", state_code: "CA", zip: '90291')
lakshmi.avatar.attach(
    io: File.open('./public/avatars/girl-kid.jpg'),
    filename: 'girl-kid.jpg',
    content_type: 'application/jpg'
)
trey = User.create(user_name: 'Trey', password: '123', city: "Austin", state_code: "TX", zip: '73301')
trey.avatar.attach(
    io: File.open('./public/avatars/black-white.jpg'),
    filename: 'black-white.jpg',
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
# manny
# scott
# hal
# matthew
# rikki
# calvin
# lakshmi
# trey
upright = ClassifiedCategory.create(heading: 'Upright Basses')

manny_ub = ClassifiedForSale.create!(bass: "Brescian", manufacture_year: 1920, status: 'For Sale', price: 110000, strings: 4, city: manny.city, state: manny.state_code, country: 'USA', classified_category_id: upright.id, user_id: manny.id)
manny_ub.pic.attach(
    io: File.open('./public/for_sale/UB_fs/ub1.jpeg'),
    filename: 'ub1.jpeg.jpg',
    content_type: 'application/jpg'
)
scott_ub = ClassifiedForSale.create!(bass: "Yankee 4/4", manufacture_year: 1800, status: 'For Sale', price: 87000, strings: 4, city: scott.city, state: scott.state_code, country: 'USA', classified_category_id: upright.id, user_id: scott.id)
scott_ub.pic.attach(
    io: File.open('./public/for_sale/UB_fs/ub8.jpeg'),
    filename: 'ub8.jpeg.jpg',
    content_type: 'application/jpg'
)
hal_ub = ClassifiedForSale.create!(bass: "Manchester", manufacture_year: 1931, status: 'For Sale', price: 97500, strings: 4, city: hal.city, state: hal.state_code, country: 'USA', classified_category_id: upright.id, user_id: hal.id)
hal_ub.pic.attach(
    io: File.open('./public/for_sale/UB_fs/ub3.jpeg'),
    filename: 'ub3.jpeg.jpg',
    content_type: 'application/jpg'
)
matthew_ub = ClassifiedForSale.create!(bass: "Busan, Romania", manufacture_year: 2020, status: 'For Sale', price: 8500, strings: 4, city: matthew.city, state: matthew.state_code, country: 'USA', classified_category_id: upright.id, user_id: matthew.id)
matthew_ub.pic.attach(
    io: File.open('./public/for_sale/UB_fs/ub6.jpeg'),
    filename: 'ub6.jpeg.jpg',
    content_type: 'application/jpg'
)
ForSaleMessage.create(content: '<p>An early American Yankee 4/4 of enormous proportions, with a 4-piece pine top, four-piece figured sugar maple flatback, and original maple neck/scroll. Currently in a 5-string configuration. A very unique instrument and a true survivor in good condition!</p>
    ', media: 'none', classified_for_sale_id: matthew_ub.id, user_id: matthew.id)


# manny
# scott
# hal
# matthew
# rikki
# calvin
# lakshmi
# trey
bg = ClassifiedCategory.create(heading: 'Bass Guitars')
# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: bg.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end
trey_bg = ClassifiedForSale.create!(bass: "1960 Fender P", manufacture_year: 1960, status: 'For Trade', price: 5000, strings: 4, city: trey.city, state: trey.state_code, country: 'USA', classified_category_id: bg.id, user_id: trey.id)
trey_bg.pic.attach(
    io: File.open('./public/for_sale/BG_fs/bg1.jpeg'),
    filename: 'bg1.jpeg.jpg',
    content_type: 'application/jpg'
)
lakshmi_bg = ClassifiedForSale.create!(bass: "Warwick Vette $$", manufacture_year: 1990, status: 'For Sale', price: 2100, strings: 4, city: lakshmi.city, state: lakshmi.state_code, country: 'USA', classified_category_id: bg.id, user_id: lakshmi.id)
lakshmi_bg.pic.attach(
    io: File.open('./public/for_sale/BG_fs/bg2.jpg'),
    filename: 'bg2.jpg.jpg',
    content_type: 'application/jpg'
)
calvin_bg = ClassifiedForSale.create!(bass: "Fodera Japanese", manufacture_year: 2008, status: 'For Sale', price: 8000, strings: 4, city: calvin.city, state: calvin.state_code, country: 'USA', classified_category_id: bg.id, user_id: calvin.id)
calvin_bg.pic.attach(
    io: File.open('./public/for_sale/BG_fs/bg3.jpeg'),
    filename: 'bg3.jpeg.jpg',
    content_type: 'application/jpg'
)
rikki_bg = ClassifiedForSale.create!(bass: "Fodera", manufacture_year: 1999, status: 'For Trade', price: 6600, strings: 4, city: rikki.city, state: rikki.state_code, country: 'USA', classified_category_id: bg.id, user_id: rikki.id)
rikki_bg.pic.attach(
    io: File.open('./public/for_sale/BG_fs/bg4.jpeg'),
    filename: 'bg4.jpeg.jpg',
    content_type: 'application/jpg'
)
scott_bg = ClassifiedForSale.create!(bass: "Meridian MOJO II", manufacture_year: 2010, status: 'For Sale', price: 4350, strings: 4, city: scott.city, state: scott.state_code, country: 'USA', classified_category_id: bg.id, user_id: scott.id)
scott_bg.pic.attach(
    io: File.open('./public/for_sale/BG_fs/bg5.jpeg'),
    filename: 'bg5.jpeg.jpg',
    content_type: 'application/jpg'
)

# manny
# scott
# hal
# matthew
# rikki
# calvin
# lakshmi
# trey
amp = ClassifiedCategory.create(heading: 'Amplifiers')
lakshmi_amp = ClassifiedForSale.create!(bass: "AI UpShot 1", manufacture_year: 2001, status: 'For Trade', price: 1099, strings: 0, city: lakshmi.city, state: lakshmi.state_code, country: 'USA', classified_category_id: amp.id, user_id: lakshmi.id)
lakshmi_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp6.jpeg'),
    filename: 'amp6.jpeg.jpg',
    content_type: 'application/jpg'
)
ForSaleMessage.create(content: '<p>The UpShot 1 is the combination of the UpShot cabinet and the Clarus SL head<p/>
 
    <p>Specs:</p><p>    The DoubleShot cabinet is a compact (12in D x 11in W), lightweight (15 lbs.) 2x10 plus 1x5 speaker system for acoustic and electric instruments. The system is unique, with the woofers mounted in a side-firing configuration and the midrange firing forward. The result is a highly portable, yet great sounding speaker system.</p><p>        ◦   Frequency response: 40 to 16kHz</p><p>        ◦   Power rating: 600W</p><p>        ◦   Max SPL: 118 dB/m</p><p>        ◦   Impedance: 4 ohms</p><p>    &nbsp;</p><p>    The Clarus SL-2 head is an exceptionally portable dual-channel integrated amp&nbsp;with 600 watts of power — and an ideal choice for the road.</p><p>        ◦   Light weight (&lt;2.5 lbs.), small size (2.1x7.2x7.4 inches)</p><p>        ◦   Two channels each with tone controls and filter</p><p>        ◦   Channel and Master level controls</p><p>        ◦   Four band EQ per channel</p><p>        ◦   Sweepable low cut filter per channel</p><p>        ◦   Direct out with selectable 10 dB pad, pre/post switch and ground lift</p><p>        ◦   Selectable internal jumper options for gain and limiter</p><p>        ◦   High fidelity, low noise operation: 110 dB SNR at direct out</p><p>        ◦   Automatic voltage switching for universal AC mains operation</p><p>        ◦   650 Watt output at 4 ohms (music power)</p><p>        ◦   Dual speaker outputs with speakon connectors</p><p>        ◦   ¼-20 mounting nut on chassis bottom for mounting on mic stand or combo amp bracket</p>
    ', media: 'none', classified_for_sale_id: lakshmi_amp.id, user_id: lakshmi.id)

scott_amp = ClassifiedForSale.create!(bass: "Glockenklang Uno", manufacture_year: 1990, status: 'For Sale', price: 2500, strings: 0, city: scott.city, state: scott.state_code, country: 'USA', classified_category_id: amp.id, user_id: scott.id)
scott_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp1.jpeg'),
    filename: 'amp1.jpeg.jpg',
    content_type: 'application/jpg'
)
trey_amp = ClassifiedForSale.create!(bass: "AI DoubleShot 2", manufacture_year: 2006, status: 'For Sale', price: 1449, strings: 0, city: trey.city, state: trey.state_code, country: 'USA', classified_category_id: amp.id, user_id: trey.id)
trey_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp5.jpeg'),
    filename: 'amp5.jpeg.jpg',
    content_type: 'application/jpg'
)
ForSaleMessage.create(content: "<p>The DoubleShot 2 is the combination of the DoubleShot cabinet and the Clarus SL-2 head.</p><p>&nbsp;</p><p>    Specs:</p><p>    The DoubleShot cabinet is a compact (12in D x 11in W), lightweight (15 lbs.) 2x10 plus 1x5 speaker system for acoustic and electric instruments. The system is unique, with the woofers mounted in a side-firing configuration and the midrange firing forward. The result is a highly portable, yet great sounding speaker system.</p><p>        ◦   Frequency response: 40 to 16kHz</p><p>        ◦   Power rating: 600W</p><p>        ◦   Max SPL: 118 dB/m</p><p>        ◦   Impedance: 4 ohms</p><p>    &nbsp;</p><p>    The Clarus SL-2 head is an exceptionally portable dual-channel integrated amp&nbsp;with 600 watts of power — and an ideal choice for the road.</p><p>        ◦   Light weight (&lt;2.5 lbs.), small size (2.1x7.2x7.4 inches)</p><p>        ◦   Two channels each with tone controls and filter</p><p>        ◦   Channel and Master level controls</p><p>        ◦   Four band EQ per channel</p><p>        ◦   Sweepable low cut filter per channel</p><p>        ◦   Direct out with selectable 10 dB pad, pre/post switch and ground lift</p><p>        ◦   Selectable internal jumper options for gain and limiter</p><p>        ◦   High fidelity, low noise operation: 110 dB SNR at direct out</p><p>        ◦   Automatic voltage switching for universal AC mains operation</p><p>        ◦   650 Watt output at 4 ohms (music power)</p><p>        ◦   Dual speaker outputs with speakon connectors</p><p>        ◦   ¼-20 mounting nut on chassis bottom for mounting on mic stand or combo amp bracket</p>" , media: 'none', classified_for_sale_id: trey_amp.id, user_id: trey.id)

matthew_amp = ClassifiedForSale.create!(bass: "Whappy Jr", manufacture_year: 2011, status: 'For Sale', price: 650, strings: 0, city: matthew.city, state: matthew.state_code, country: 'USA', classified_category_id: amp.id, user_id: matthew.id)
matthew_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp2.jpeg'),
    filename: 'amp2.jpeg.jpg',
    content_type: 'application/jpg'
)
rikki_amp = ClassifiedForSale.create!(bass: "PJ Suitcase Black", manufacture_year: 2014, status: 'For Trade', price: 950, strings: 0, city: rikki.city, state: rikki.state_code, country: 'USA', classified_category_id: amp.id, user_id: rikki.id)
rikki_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp3.jpeg'),
    filename: 'amp3.jpeg.jpg',
    content_type: 'application/jpg'
)
manny_amp = ClassifiedForSale.create!(bass: "PJ Suitcase Red", manufacture_year: 2017, status: 'For Trade', price: 1100, strings: 0, city: manny.city, state: manny.state_code, country: 'USA', classified_category_id: amp.id, user_id: manny.id)
manny_amp.pic.attach(
    io: File.open('./public/for_sale/Amps_fs/amp4.jpeg'),
    filename: 'amp4.jpeg.jpg',
    content_type: 'application/jpg'
)

# manny
# scott
# hal
# matthew
# rikki
# calvin
# lakshmi
# trey
acc = ClassifiedCategory.create(heading: 'Accessories')
trey_acc = ClassifiedForSale.create!(bass: "Soundbox 2 Reverb", manufacture_year: 1990, status: 'For Sale', price: 75, strings: 0, city: trey.city, state: trey.state_code, country: 'USA', classified_category_id: acc.id, user_id: trey.id)
trey_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc1.jpeg'),
    filename: 'acc1.jpeg.jpg',
    content_type: 'application/jpg'
)
manny_acc = ClassifiedForSale.create!(bass: "Schaeffer Bow", manufacture_year: 1982, status: 'For Sale', price: 880, strings: 0, city: manny.city, state: manny.state_code, country: 'USA', classified_category_id: acc.id, user_id: manny.id)
manny_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc10.jpeg'),
    filename: 'acc10.jpeg.jpg',
    content_type: 'application/jpg'
)
manny_acc = ClassifiedForSale.create!(bass: "DG Realist PU", manufacture_year: 2018, status: 'For Sale', price: 249, strings: 0, city: manny.city, state: manny.state_code, country: 'USA', classified_category_id: acc.id, user_id: manny.id)
manny_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc8.jpeg'),
    filename: 'acc8.jpeg.jpg',
    content_type: 'application/jpg'
)
rikki_acc = ClassifiedForSale.create!(bass: "Lehle Dual", manufacture_year: 1989, status: 'For Sale', price: 165, strings: 0, city: rikki.city, state: rikki.state_code, country: 'USA', classified_category_id: acc.id, user_id: rikki.id)
rikki_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc2.jpeg'),
    filename: 'acc2.jpeg.jpg',
    content_type: 'application/jpg'
)
hal_acc = ClassifiedForSale.create!(bass: "Marteaux Preamp", manufacture_year: 2000, status: 'For Trade', price: 475, strings: 0, city: hal.city, state: hal.state_code, country: 'USA', classified_category_id: acc.id, user_id: hal.id)
hal_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc3.jpeg'),
    filename: 'acc3.jpeg.jpg',
    content_type: 'application/jpg'
)
calvin_acc = ClassifiedForSale.create!(bass: "Tascam DP-oo8EX", manufacture_year: 2019, status: 'For Sale', price: 177, strings: 0, city: calvin.city, state: calvin.state_code, country: 'USA', classified_category_id: acc.id, user_id: calvin.id)
calvin_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc4.jpeg'),
    filename: 'acc4.jpeg.jpg',
    content_type: 'application/jpg'
)
scott_acc = ClassifiedForSale.create!(bass: "Upright Strings", manufacture_year: 2000, status: 'For Sale', price: 400, strings: 0, city: scott.city, state: scott.state_code, country: 'USA', classified_category_id: acc.id, user_id: scott.id)
scott_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc5.jpeg'),
    filename: 'acc5.jpeg.jpg',
    content_type: 'application/jpg'
)
matthew_acc = ClassifiedForSale.create!(bass: "Protec Bow Case", manufacture_year: 2021, status: 'For Sale', price: 69.95, strings: 0, city: matthew.city, state: matthew.state_code, country: 'USA', classified_category_id: acc.id, user_id: matthew.id)
matthew_acc.pic.attach(
    io: File.open('./public/for_sale/Accessories_fs/acc6.jpeg'),
    filename: 'acc6.jpeg.jpg',
    content_type: 'application/jpg'
)

# 10.times do
#     ad = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: acc.id, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ad.id, user_id: rand(1..10))
# end
# ubfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 1, user_id: rand(1..10))
#     ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ubfs.id, user_id: rand(1..10))
#     ubfs.pic.attach(
#         io: File.open('public/for_sale/upbass1_full.jpeg'),
#         filename: 'upbass1_full.jpeg',
#         content_type: 'application/jpg'
#     )

# bgfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 2, user_id: rand(1..10))
#         ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: bgfs.id, user_id: rand(1..10))
#         bgfs.pic.attach(
#             io: File.open('public/for_sale/Jap-Fodera-bg.jpeg'),
#             filename: 'Jap-Fodera-bg.jpeg',
#             content_type: 'application/jpg'
#         )
# ampfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 3, user_id: rand(1..10))
#             ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: ampfs.id, user_id: rand(1..10))
#             ampfs.pic.attach(
#                 io: File.open('public/for_sale/amp-small2.jpeg'),
#                 filename: 'amp-small2.jpeg',
#                 content_type: 'application/jpg'
#             )
# accfs = ClassifiedForSale.create(bass: Faker::Music.instrument, manufacture_year: rand(1960..2021), status: 'For Sale', price: rand(200..4000), strings: rand(4..6),  city: Faker::Address.community, state: Faker::Address.state, country: 'USA', classified_category_id: 4, user_id: rand(1..10))
#                 ForSaleMessage.create(content: Faker::Hipster.paragraph, media: 'none', classified_for_sale_id: accfs.id, user_id: rand(1..10))
#                 accfs.pic.attach(
#                     io: File.open('public/for_sale/accessories.jpeg'),
#                     filename: 'accessories.jpeg',
#                     content_type: 'application/jpg'
#                 )
ap "All Seeded!"