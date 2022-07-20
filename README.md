# Hospitable Angular Code Assessment

Let's create a super simple Inbox list to display a list of conversations that our customers have received from guests across various channels (Airbnb, Vrbo, Booking.com, etc.)

- Verify that you can start the Angular dev server, and see 'Hello there!' at the index route
- Start up the mock JSON Server API by running `npm run api`

- Create an Inbox _module_, it should be lazy-loaded and available from '/inbox'

- Create an Inbox _service_, which should fetch data from our RESTful JSON API.
  - `GET http://localhost:3000/conversations` uses JSON Server to provide some sample data for this exercise
  - A `conversation` model has been created for you in `src/app/shared/models`
  - Write a method in the service to fetch the `conversations` from the API. We'd strongly suggest using `HttpClientModule` for this.
- Create an Inbox list _component_ in your newly created Inbox module
  - This component should load at '/inbox'
  - Using your Inbox _service_, get the list of conversations in this component.
  - While the API is loading, a suitable loading message or icon should be shown (The JSON-server API has a 5000ms delay coded in)
  - If no conversations are returned, a suitable 'No conversations' found indicator should be displayed.
  - If there is an error fetching the conversations, a suitable error should be displayed to the user.
  - Add a basic table header in your Inbox list component, and then for each message that is returned from the API, render it using a child component.
  - Add some styling to your components to improve usability. Ensure that the UI looks good across multiple screen sizes. There's no spec for how it should look, go wild and think about what a user would like to see on the page.
  ***

You should not need to add any additional packages to complete this assessment. However feel free to add any that you typically use - if they'll make the task easier for you.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
