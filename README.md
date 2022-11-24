# Bass forum site:

### Name: ?

### User: Has profile page. Admin Privileges allow all actions besides browsing, including

1 posting messages/classified ads,
2 tipping,
3 liking,
4 pinning
5 dms

### Guest: No sign-in required. Only allowed to:

1 browse
2 message on classified discussion

### Features: Classifieds, Forums, Reviews, Search, Member Profiles Viewer, DMs

### Member Profiles Viewer: Categories for Most Messages, Most Likes, Most Media

### Forums: Cannot post or respond unless a member signed in. Main Forums > Sub Forums > Discussions

#### Main Goals:

1 User can post discussion or message (can contain media), respond to message, like message, pin discussion
2 User can give/receive $tip via message in discussion.
Stretch: Archive sub-forums

### Classifieds: Main Categories > ForSale List > ForSaleDiscussion

#### Main Goals:

1 User can post new classified ad
-Poster can change status of the sale (forSale/forTrade/forSaleTrade/Sold/Traded)

2 Quick filter for items with particular status

3 Search classifieds (button links to search page with classifieds filter preselected)

### DMs: User can search database for particular user by userName and message them. Inbox receives messages

# DB TABLES:

Notes: users have 2 relationships with forum_discussion_topics. One direct relationship (one to many) and indirect through user_pins (user_pins: one to many, forum_discussion_topics: many to many through user_pins and join_pins_topics). Hence the need for both user_pins and join_pins_topics instead of just a many to many involving users and forum_discussion_topics

## users

---has_one :inbox
---has_many :for_sale_messages
---has_many :classifieds_for_sales
---has_many :forum_discussion_topics
---has_many :forum_topic_messages

> user_name
> password
> pic
> balance

## user_pins

---has_one :user
---has_many :dms (sent)
---has_many :join_pins_topics
---has_many :forum_discussion_topics, through: :join_pins_topics

## join_pins_topics

---has_many :user_pins
---has_many :forum_discussion_topics

## inboxes

---has_one :user
---has_many :dms

> new_messages

## dms

---belongs_to :user (as sender_id)
---belongs_to :inbox

> user_id (sender)
> content

## main_forums

---has_many :sub_forums

> category
> heading

## sub_forums

---belongs_to :main_forum
---has_many :forum_discussion_topics

> heading

## forum_discussion_topics

---belongs_to :sub_forum
---belongs_to :user
---has_many :forum_topic_questions
---has_many :join_pins_topics
---has_many :user_pins, through: :join_pins_topics

> heading

## forum_topic_messages

---belongs_to :forum_discussion_topic
---belongs_to :user

> content
> media
> likes

## classifieds_categories,

---has_many :classifieds_for_sale

> heading

## classifieds_for_sales,

---belongs_to :classifieds_category
---belongs_to :user
---has_many :for_sale_messages

> bass
> manufacture_year
> status
> price
> strings
> location
> country
> views

## for_sale_messages,

---belongs_to :classifieds_for_sale
---belongs_to :user

> content
> media

# PLAN:

1 User Admin Namespace
