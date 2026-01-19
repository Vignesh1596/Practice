# Contact List Application

This project contains the testing work I completed for the Contact List application. It includes manual test cases, UI automation scripts, API tests, test data, and overall documentation of how I approached and executed..

## Overview
The goal of this project is to validate the major functionalities of the Contact List application such as Registration, Login, Contact creation, editing, deletion, user authentication, and API responses. I have covered end-to-end scenarios, negative cases, validations, and security checks like unauthorized access.

## Tools and Technologies Used
- Playwright with JavaScript for UI automation
- Playwright API testing for backend validation
- Node.js environment
- CSV for storing test cases
- Markdown for documentation

## Project Structure
The project is organised in the following structure:

tests/
- ui tests for Register, Login, Contacts and Logout
- api tests for Login and Contact CRUD

pages/
- Page Object files for Login, Register and Contacts

test-data/
- test-cases.csv containing all manual scenarios

playwright.config.js  
README.md

## How to Set Up and Run the Tests

1. Install all dependencies:
   npm install

2. Run the entire test suite:
   npx playwright test

3. To run only UI tests:
   npx playwright test tests/ui

4. To run only API tests:
   npx playwright test tests/api

5. To view the Playwright HTML report after execution:
   npx playwright show-report

## What Has Been Covered

### Authentication
- User registration with valid and invalid data
- Login with valid and invalid credentials
- Redirect handling for unauthorized access

### Contacts Module
- Adding a new contact
- Editing an existing contact
- Deleting a contact
- Viewing contact details
- Validations for email, phone and required fields

### API Testing
- Login API
- Create Contact API
- Update Contact API
- Delete Contact API
- Get Contacts List API
- Handling 401 and 403 status codes for missing/invalid token

### UI/UX Observations
- Validation messages
- Navigation functionality
- Logout scenarios

## Manual Test Cases
All the manual test cases have been included in the file:
test-data/test-cases.csv

The file contains positive, negative, validation, UI, API and security scenarios.

## Bugs Identified
Below are a few bugs I noticed during testing:
1. Weak password sometimes gets accepted without proper validation.
2. Some error messages during login are not consistent.
3. Contact list does not refresh automatically after editing.
4. In some cases, optional fields do not validate correctly.

## Test Credentials Used
Email: testuser@example.com  
Password: Test@1234

## Assumptions Made
- The environment remains stable during testing.
- API behaviour is based on available responses.
- UI elements and selectors remain unchanged.

## Conclusion
This includes end-to-end manual and automation coverage for both UI and API. All scenarios have been documented, automated where applicable, and supported with test data and bug findings. The project is complete and ready for submission.
