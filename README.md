# Searchify App (Frontend) 

This is the frontend application for the Searchify project. The app allows users to search for items, view search results, and interact with them through an intuitive and responsive interface.

## Features 

Search bar with dynamic input for user queries. 

Displays search results as a responsive grid. 

Each result includes an image, title, and description. 

User-friendly interface with clean design. 

Error handling for failed API calls. 

Fully responsive for mobile, tablet, and desktop. 


### Technologies Used 

ReactJS: Frontend framework. 

Context API: State management. 

CSS: Styling and layout. 

React Router: Navigation. 

Axios: API calls. 

Flexbox & Grid: Responsive layout design. 


### Folder Structure 

searchify-app/ 

├── public/ 

│ └── index.html # Main HTML file 

├── src/ │

├── components/ # Reusable components 

│ │ ├── Layout.js # Layout wrapper 

│ │ └── Header.js # Header component 

│ ├── context/ │ 

│ └── SearchContext.js # Context for state management 

│ ├── pages/ # Application pages 

│ │ ├── HomePage.js # Search input page 

│ │ └── ResultPage.js # Search results page 

│ ├── services/ │ 

│ └── searchService.js # API service for fetching results 

│ ├── styles/ 

│ │ ├── Home.css # Styles for HomePage 

│ │ └── Result.css # Styles for ResultPage 

│ ├── App.js # Root component │ 

├── index.js # Entry point 

│ └── utils/ # Utility functions (if any) 

└── package.json # App dependencies and scripts



### Prerequisites 

Node.js (v16 or higher): Download and install from Node.js Official Website. 

npm (comes with Node.js) or yarn for package management. 


### Getting Started

1. Clone the Repository 

git clone https://github.com/shameema22/searchify-app.git 
cd searchify-app 
 

2. Install Dependencies 

Run the following command in the project directory: 

npm install 
 

3. Start the Development Server 

Start the app on your local development server: 

npm start 
 

The app will run at http://localhost:3000. 


## Scripts 

npm start: Starts the development server. 

npm run build: Builds the app for production. 

npm test: Runs test cases (if implemented). 

npm run eject: Ejects the app configuration (not recommended unless needed). 


### Environment Variables 

Create a .env file in the project root with the following configuration: 

REACT_APP_API_URL=http://localhost:56423/Searchify 
 

This environment variable is used for making API calls to the backend. 


### API Integration 

The frontend communicates with the backend via the SearchContext and the searchService.js. 

#### API Endpoint: 

POST /GetSearchResults 

####Sample Response: 

    { 
      "results": [ 
        { 
          "id": 1, 
          "title": "Eat. Stay. Love.", 
          "description": "An all in one experience at Fratelli Vineyards.", 
          "imageUrl": "http://localhost:56423/Images/vineyard.jpg" 
        }, 
        { 
          "id": 2, 
          "title": "Sunset Savour", 
          "description": "Enjoy exclusive 6 experiences at Sula Vineyards.", 
          "imageUrl": "http://localhost:56423/Images/sunset.jpg" 
        } 
      ], 
      "totalRecords": 2 
    } 
 

### Styling 

The app uses CSS for styling and layout. 

####Responsive Grid (Results Page) 

A flexbox/grid layout is used to display search results in rows and columns. 

Each row contains 4 items (on larger screens), which adjust to 2 items on tablets and 1 item on mobile. 


### Future Enhancements 

Pagination: Add pagination for large datasets. 

Search Filters: Add filters for narrowing down results. 

Error Page: Display a dedicated error page for API failures. 

Unit Testing: Implement unit tests for components. 

Accessibility: Improve ARIA roles and keyboard navigation. 

User login and Registration with JWT 
