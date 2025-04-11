# L.I.T. (Lost In Translation)

## Overview

L.I.T. is a language-learner project built using Next.js, a React framework. L.I.T. helps users learn a new language using flashcards, matchmaking and fill in the blanks.  The user can track their progress on the progress page, and the user can register on the registration page, and afterwards view their details on the account page.

## Components 

`ActivityCard.js` - Displays links to activities/components FillBlank.js, Flashcards.js and Matchmaking.js. - `FillBlank.js` - Contains fill in the blank activity.  - `Flashcards.js` - Contains flash card activity. - `Matchmaking.js` - Contains matchmaking activity. - `NavBar.js` -Contains collapsible navigation bar that links to home page, activities page, account page and registration page.- `Progress.js` - Contains the progress context for ProgressBar.js.- `ProgressBar.js` -Contains the percentage of activities completed using the progress context from Progress.js.- `RegistrationForm.js` -Contains the registration form.- `UserDetails.js` -Contains the user context for the Account page.   - `Layout.js` - Wraps pages with a consistent layout structure. 

## Routes 

L.I.T. uses a file-based routing system. Here are the main routes: - `/` - Home page. - `/activities` - Activities section containing links to match making, flashcards and fill in the blank activities. - `/progress` - Progress page. - `/account` - Account page. - `register` - Registration page. 

## State Management 

 L.I.T manages state using React’s `useState` and selectively employs Context API.- `ActivityCard.js` -State is used to determine which activity is shown.- `FillBlank.js` -State is used to store user input, update dynamically, and to control the result display and give feedback.  Context is used to track the learning progress.- `Flashcards.js` -State is used to flip the cards, to make sure progress is tracked once per card, and to manage the data for the learning content.  Context is used to track the learning progress.- `Matchmaking.js` -State is used to randomize the list of words, track the users selected word, match the words and provide feedback.  Context is used to track the learning progress.- `NavBar.js` - State is used to set if the navigation bar is open or collapsed.- `RegistrationForm.js` -State is used to track and update the user’s input.  Context is used to save the user details for UserDetails.js.- `UserDetails.js` -Context is used to receive the user details from RegistrationForm.js.

## Getting Started 

1. Clone the repository: 
git clone https://github.com/LisaTarn/Lost-In-Translation.git
2. Install dependencies: 
npm install
3. Run the development server: 
npm run dev
4. Open [http://localhost:3000](http://localhost:3000) in your browser. 


