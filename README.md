# Getting Started with Github-Search React App

To create a project in react executed the below command :

npx create-react-app github-search

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Overview :

Before starting to code the app, I did analysis around how all the requirements can be 
seprated into different independent components. 

Below are the components present in the app :
1. App Component
2. HomePage Component
3. GitHubProfile Component
4. GithubRepo Component

1. App Component :
This is the parent component. In App Component I have passed the HomPage Component  
   where all the logic is written.
   
2. HomePage Component :
In HomePage component, all the userinput State and calling the external GithubApi
   with debouncing is written. In this component i have passed two child components
   GithubProfileCard (User profile) and GithubRepo (Repository details).
   
3. GithubProfile :
 In this component, the user profile values for the fields are passed through props from the 
   HomePage Component and the values are being rendered in the card.
   
4. GithubRepo :
   In this component, the repository values for the fields are passed through props from the
   HomePage Component and the values are being rendered in the card.
   
5.index.css :
Have maintained the Css for the application.


