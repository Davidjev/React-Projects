# README for airbnb

This project contains App.js and Data.js files and in one folder we have three components: Card.js, Hero.js, and Navbar.js.

### Components

Card.js  
The Card component is a reusable component that displays information about an experience, including its cover image, title, price, and location. It also displays a badge indicating whether the experience is sold out or online. The component receives props that contain information about the experience, including its title, description, price, cover image, stats (which include the rating and review count), location, and open spots. The component uses conditional rendering to display the badge based on whether the experience is sold out or online.  

Hero.js  
The Hero component is a reusable component that displays a hero image and a header and text introducing the online experiences. The component receives no props and simply renders the image and text.  

Navbar.js  
The Navbar component is a reusable component that displays a logo in the navigation bar. The component receives no props and simply renders the logo.  

App.js  
The App component is the main component that uses the Card, Hero, and Navbar components to display a list of experiences. It imports the Data.js file, which contains an array of experience objects. The component maps over the array to create a Card component for each experience object, passing the object as props to the Card component. The component uses the spread operator to pass all the properties of the object to the Card component as separate props. The component also sets a unique key prop for each Card component to avoid errors. The component then renders the Navbar, Hero, and Card components in the correct order.  

Data.js  
The Data.js file contains an array of experience objects that are used in the App component. Each experience object contains information about the experience, including its title, description, price, cover image, stats (which include the rating and review count), location, and open spots. The App component maps over this array to create a Card component for each experience object.  

### Getting Started

To get started with this project, follow these steps:

Clone the repository to your local machine.  
Install the dependencies by running npm install in the root directory of the project.  
Start the development server by running npm start. This will start the webpack dev server and launch the application in your default browser.  


