# Movies

Here are the README files for the LoginScreen and Home pages in a React application. These files will help other developers understand the functionality and usage of these components.

## LoginScreen Component

### Description
The LoginScreen component represents a user login screen in the application. Users are required to enter their username and password, after which they attempt to log in to the server via an API.

### Usage
The user enters their username and password in the respective fields.
By clicking the "Confirm" button, the user sends a login request through the API.
If the entered data is correct and the login is successful, the user is redirected to the home page.
If the login is unsuccessful, the user will receive an error message.
Implementation
The component uses useState to track the entered username and password. After input, the user can click the "Confirm" button to send a login request via the API. If the login is successful, an access_token is stored in the browser's local storage, and the user is redirected to the home page.

### API Endpoint
URL: https://t-adria.com/api/login
Method: POST
Headers:
Content-Type: application/json
reskin: adria
language-id: 2
Request Body: JSON object with the username, password, and other information.

## Home Component

### Description

The Home component displays a list of movies based on the selected genre. Users can navigate movies using the keyboard (arrow keys).

### Usage
The user selects a genre from the list of available genres.
Movies belonging to the selected genre are displayed.
The user can use the keyboard to navigate among movies (arrow keys: left, right, up, down).
By clicking on a movie, the user can view details about the selected movie (the implementation for this is not provided in this code).
Implementation
The component uses Axios to fetch genres and movies from "The Movie Database" API. It uses useState to track the selected genre and display the relevant movies. It also uses useEffect to monitor changes in the selected genre and the selected movie index. Additionally, useRef is used to enable keyboard focus on the movie list.

### API Endpoint
Get genres: https://api.themoviedb.org/3/genre/movie/list
Get movies for the selected genre: https://api.themoviedb.org/3/discover/movie
You need to provide an API key (API_KEY) to authenticate the requests.
Please make sure to set your API key to use these endpoints.

These README files provide basic information about each component and how to use them. Additional documentation and instructions can be added as needed.