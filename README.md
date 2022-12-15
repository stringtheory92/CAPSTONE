# Bass forum site:

### Name: SubSonic

BassSpace
Bass Mint
Sub State
SubSonic <= That's the one

## Subdirectory Names: ?

Pro Files
BassMint
Meta Threads

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
> image
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
> last_message_date (created_at of the latest message)

## forum_topic_messages

---belongs_to :forum_discussion_topic
---belongs_to :user

> content
> media
> likes

## classified_categories,

---has_many :classified_for_sale

> heading

## classified_for_sales,

---belongs_to :classified_category
---belongs_to :user
---has_many :for_sale_messages

> bass
> manufacture_year
> status
> price
> strings
> city
> state
> country
> views

## for_sale_messages,

---belongs_to :classified_for_sale
---belongs_to :user

> content
> media

# PLAN:

1 User Admin Namespace

# TERMS TO USE:

Foundation
Fundamental frequency
Network State
Sovereign Network
Sovereign State
Basicity (Chemistry - low pH)

# Active Storage

Installed mini_magick (for resizing images)

# amazing bg photos:

https://www.facebook.com/photo/?fbid=2676395625781051&set=a.355647687855868

# animated backgrounds:

// https://wweb.dev/resources/animated-css-background-generator/

# Active Storage Woes

- needed to find and add gems before active_storage:install was available
- running rails active_storage:install did not include the needed config/storage.yml file
- needed to permit the param representing the has_one_attached item
  -including avatar method and attribute on users serializer results in death loop

# Tracing Actions

-added (require 'rmagick') to config/application.rb
-installed rmagick (supposedly allows mini_magick use in Rails)
-installed imagemagick (brew install imagemagick)

# Implementing Bcrypt

-rewrote user migration password column to password_digest and seeds are working

# Pins

- users and forum_discussion_topics tables have 2 relationships:
  1 - has_many, through
  - for user's pinned topics, uses a join table ('pins')
    2 - creator/created_topic (one to many)
- uses an alias, so to access this relationship, use:
  User.first.created_topics
  ForumDiscussionTopic.first.creator (there is a creator_id on forum_discussion_topics table)

  # Colors

  -slate blue/navy & orange

  # TicketMaster API

  - dynamically obtains client/user location data based on conditions
  - attempts to use client browser location data and dateTime to construct API query for local upcoming events and render to Home
  - created function to recognize dateTime and localTime and convert to readable string
  - if browser location data is not enabled, query is constructed based on user's state_code in database
  - due to unique listings for repeat showings, events are filtered for unique names
    - names come from two different locations - artist name and event. Not all events have artist names, so the name value is conditionally set depending on whether or not that data is available. Artist name is preferred due to resulting in less redundancy
  - filtered events are sorted by genre (nested data) by converting to object with genre keys and event array values. Object is iterated over and generates appropriate components in sorted order, resulting in dynamically displayed events menu.
  - events can be selected and direct to an event details screen, where details such as ticket price range, time, and date which tickets are on sale until are displayed. Links to venue and ticket purchasing are also provided
  - menu displayed with independent scrolling and hidden overflow. On phones menu sits below main content, accessed by scrolling down. On desktop/larger screens menu occupies right segment
