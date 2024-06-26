### Countdown Timer and User Search Application

#### Overview
This project comprises two primary components: a Countdown Timer and a User Search application. The Countdown Timer enables users to set a specific time duration and manage the countdown, while the User Search application allows users to search for individuals by name, username, or email using data fetched from a public API.

#### Components
1. **Countdown Timer (`CountTimer.js`):**
   - Displays a countdown timer with input fields for hours, minutes, and seconds.
   - Users can input the desired time and start, stop, or reset the timer.
   - The timer halts automatically when it reaches zero.
   - Developed in React using functional components and hooks.

2. **User Search (`SearchUser.js`):**
   - Provides a search bar for users to input search terms and filter users based on name, username, or email.
   - Shows search history and enables users to remove items from it.
   - Users can select a user from the search result list to view details.
   - Implemented in React using functional components and hooks.
   - Fetches user data from a public API (`https://jsonplaceholder.typicode.com/users`).

#### Usage
1. **Countdown Timer:**
   - Access the Countdown Timer by navigating to `/count-timer` route.
   - Input the desired hours, minutes, and seconds.
   - Click "Start" to initiate the countdown.
   - Click "Stop" to pause the countdown.
   - Click "Reset" to reset the timer.

2. **User Search:**
   - Access the User Search by navigating to `/search-user` route.
   - Input search terms in the search bar to filter users.
   - Select a sorting option (by name, username, or email).
   - View search history and remove items as needed.
   - Click on a user from the result list to view details.

#### Dependencies
- React
- react-router-dom
- axios
- react-icons
- Tailwind CSS (for styling)

#### Setup
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Access the application in your browser at `http://localhost:3000`.

#### Compatibility
- The application is compatible with all devices due to its responsive design powered by Tailwind CSS.

#### Created by: 
- Shivam Yogi

#### Acknowledgements
- This project utilizes data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demonstration purposes.
