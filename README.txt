Here are the steps to follow:

Clone the project repository from the source control platform (e.g., Git) to your local machine.

First you will need to install and setup Apache Maven

It will be used to download the project dependencies and build the back end.

Run the back end by running the EmployeeDataToolApplication.java file.

This will start the Spring Boot server, which will serve as the API for the front end.

In a separate terminal or command prompt, navigate to the frontend directory in the project root.

Install the front end dependencies by running the following command:

npm install

This will download the required packages for the React front end.

Start the front end by running the following command in the root of the frontend folder.

npm start

This will start the React server, which will serve the front end to the browser.

Open a web browser and go to http://localhost:3000 to view the running app. The front end should communicate with the back end API running on http://localhost:8080 by default.

That's it! You should now be able to run the app with a Spring Boot back end and a React front end.