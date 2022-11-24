Bass forum site:

Name: ?

User: Has profile page. Admin Privileges allow all actions besides browsing, including
1 posting messages/classified ads,
2 tipping,
3 liking,
4 pinning
5 dms

Guest: No sign-in required. Only allowed to:
1 browse
2 message on classified discussion

Features: Classifieds, Forums, Reviews, Search, Member Profiles Viewer, DMs

Member Profiles Viewer: Categories for Most Messages, Most Likes, Most Media

Forums: Cannot post or respond unless a member signed in. Main Forums > Sub Forums > Discussions
Main Goals:
1 User can post discussion or message (can contain media), respond to message, like message, pin discussion
2 User can give/receive $tip via message in discussion.
Stretch: Archive sub-forums

Classifieds: Main Categories > ForSale List > ForSaleDiscussion
Main Goals:
1 User can post new classified ad
-Poster can change status of the sale (forSale/forTrade/forSaleTrade/Sold/Traded)

2 Quick filter for items with particular status

3 Search classifieds (button links to search page with classifieds filter preselected)

DMs: User can search database for particular user by userName and message them. Inbox receives messages

DB TABLES:
users
---has_one :inbox
---has_many :for_sale_messages
---has_many :classifieds_for_sales
---has_many :forum_discussion_topics
---has_many :forum_topic_messages

> user_name
> password
> pic
> balance

user_pins
---has_one :user
---has_many :join_pins_topics
---has_many :forum_discussion_topics, through: :join_pins_topics

join_pins_topics
---has_many :user_pins
---has_many :forum_discussion_topics

inboxes
---has_one :user
---has_many :dms

> new_messages

dms
belongs_to :inbox

> from
> content

main_forums
---has_many :sub_forums

> category
> heading

sub_forums
---has-one :main_forum
---has_many :forum_discussion_topics

> heading

forum_discussion_topics
---has_one :sub_forum
---has_one :user
---has_many :user_pins
---has_many :forum_topic_questions

> heading

forum_topic_messages
---has_one :forum_discussion_topic
---has_one :user

> content
> media
> likes

classifieds_categories,
---has_many :classifieds_for_sale

> heading

classifieds_for_sales,
---has_one :classifieds_category
---has_one :user
---has_many :for_sale_messages

> bass
> manufacture_year
> status
> price
> strings
> location
> country
> views

for_sale_messages,
---has_one :classifieds_for_sale
---has_one :user

> content
> media

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
