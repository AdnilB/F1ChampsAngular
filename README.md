# F1Champions

A single page web application was created to display a list of F1 racing world champions for a particular year.

Users are able to select a year ranging from 2005 to present year by use of a dropdown select component. The corresponding data for the selected year is generated and displayed right after a year has been selected.

The data used for the project is retreive from the api's available at http://ergast.com. All api's used have been paginated to control the number of records retreived and to keep it to a small number improving overal response time when retreiving data.

The application has also been optimised for mobile device viewing.

Unit test have been completed for each component used in the application. These tests can be run by entering the 'ng serve' command into the terminal. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.16.

## How to run the project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`


## How to run the unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
