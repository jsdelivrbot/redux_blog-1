Redux Blog Application
- RESTful routes
- Validate user data, save it to DB


User flow

1. Index page loads in user browser
2. User clicks a link and History (interacts with the URL) picks up the new URL and passes it along to the ReactRouter which updates the react components shown on the screen, depending on the URL
3. React renders the updated components
4. Updated content is displayed on the new URL

Functionalities
1. Create posts_new component
2. Connect posts_new component to a route URL within routes.js
3. Implement a button in posts_index component to navigate to posts_new
4. Add a form on posts_new component. When the user submits the form, an action creator should be called to save the blog post.
5. Create the action creator and reducer  

