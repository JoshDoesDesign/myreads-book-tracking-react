# MyReads Project

This is my submission for 

## How To Initialize This Project Locally

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

Your web application should now successfully be running on port 3000.

## How To Navigate This Web Application

After you have successfully initialized your application, there are two routes you will be able to visit:

* The home route: `/`
* The search route: `/search`

Here are the steps required in order to add a book to your collection:

1. Navigate to the `/search` route
2. Type in one of the valid search terms into the search bar. These terms can be found in `SEARCH_TERMS.md`
3. After you have typed at least two characters into the search bar, this should successfully call the BooksAPI.search() endpoint. The promise returned from this endpoint contains a list of books with titles that contain the characters you typed into the search bar. These book are then added to the state and mapped over in the virtual DOM. See line 20 of searchBooks.js to see this method in action.
4. The user then has the option to click the green drop down arrow for each book and add a book to one of the following shelves: Currently Reading, Want to Read, Read or None. Choose one of the categories in the dropdown.
5. When the user navigates back to the home route, they should now see the book that was clicked on earlier in the correct shelf.

