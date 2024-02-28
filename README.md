# Rate Punk Webpage

## Description

This repository contains a React application featuring a form component that enables users to input their email addresses for referral purposes. The form validates the email addresses before submission and sends them to JSONBIN. Last email will be overwritten with the new one. Upon successful submission, the form provides users with a referral link to share.

## Components

### Form

- Component responsible for handling user input, submission, and displaying success/error messages.
- Users can input their email address to receive a referral link.
- Validates the email address before submission.
- Sends the email to JSONBIN, overwriting last existing.
- Upon successful submission, provides the user with a referral link to share.

## Usage

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Access the application in your browser at the specified localhost address.

## Technologies Used

- Next.js
- TypeScript
- Axios
- SCSS
