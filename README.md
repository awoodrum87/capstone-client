[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Capstone Client Documentation

- [Link to API Documentation](https://github.com/awoodrum87/capstone-api)
- [Link to Deployed Application](https://awoodrum87.github.io/capstone-client/index.html)


## User Stories
1. As a User I want to be able to perform authentication actions (Sign-up, sign-in, sign-out, change password)
2. As a User I want to be able to post a quote
3. As a User I want to be able to get the quotes I have posted
4. As a User I want to be able to updated the quotes I have posted
5. As a User I want to be able to delete the quotes I have posted

## Wireframes

https://goo.gl/photos/YaaSqym3XNYCGvEw5

## Separation of Concerns and File Structure
`assets/scripts/quotes`
- holds `api.js`, `events.js` and `ui.js` files
  - `events.js` contains code for event listeners and then calls the functions in the `api.js` file
  - `api.js` contains code for AJAX calls to the server
  - `ui.js` contains code for failure or success of AJAX calls such as user feedback messages and storing data

`assets/scripts/visible.js`
- contains code that handles hiding, showing, and clearing elements that are visible to the user. Those functions are then called in the `ui.js` files



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
