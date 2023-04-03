# book-search-engine

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria 

```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Table of Contents
* [Technologies](#technologies)
* [Link to Repo](#link-to-repo)
* [Deployed Application](#deployed-application)
* [Example GIF's](#example-gifs)
* [Summary](#summary)
* [Challenge Help](#challenge-help)

## Technologies 
* JavaScript
* Express.js
* Node.js
* MongoDB
* GraphQL
* React

## Link to Repo
[GitHub](https://github.com/sarahlang9800/book-search-engine)

## Deployed Application
[Heroku](https://sarah-lang-book-search-engine.herokuapp.com/)

## Example GIF's 
![Example Animations](/Assets/21-mern-homework-demo-01.gif)
![Example Animations](/Assets/21-mern-homework-demo-02.gif)
![Example Animations](/Assets/21-mern-homework-demo-03.gif)

## Summary
* Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
* Uses an Apollo Server and apply it to the Express.js server as middleware.
* Includes schema settings for resolvers and typeDefs as outlined in the Challenge instructions.
* Modifies the existing authentication middleware to work in the context of a GraphQL API.
* Uses an Apollo Provider so that the application can communicate with the Apollo Server.
* Application is deployed to Heroku.

### Challenge Help
* AskBCS Learning Assistants