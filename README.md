# F1Champions

A single page web application was created to display a list of F1 racing world champions for a particular year.

Users are able to select a year ranging from 2005 to present year by use of a dropdown select component. The corresponding data for the selected year is generated and displayed right after a year has been selected.

The data used for the project is retrieved from the api's available at http://ergast.com. All api's used have been paginated to control the number of records retrieved and to keep it to a small number improving overall response time when retrieving data.

The application has also been optimized for mobile device viewing.

Unit test have been completed for each component used in the application. These tests can be run by entering the 'ng test' command into the terminal. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.16.

## How to run the project

Step1: Download the project.

Step2: Navigate to project route. Run 'npm i' to install the node packages (Node has to be installed in order to run this command)

Step3: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` on your browser to access the application.

## How to run the unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
