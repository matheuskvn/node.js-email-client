# Node.js Email Client

A simple Node.js application using Express and Nodemailer to send emails via a GET request.

## Features

- Sends an email using Gmail SMTP when accessing the `/send` endpoint.
- Uses environment variables for email credentials.
- Easy to test with a browser or Postman.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- A Gmail account (with [App Passwords](https://support.google.com/accounts/answer/185833) if 2FA is enabled)

### Installation

1. Clone the repository and navigate to the project folder.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the following content:
   ```
   EMAIL=your_gmail_address@gmail.com
   PASSWORD=your_gmail_app_password
   PORT=3000
   ```

### Usage

1. Start the server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   node index.js
   ```

2. In your browser or Postman, access:
   ```
   http://localhost:3000/send
   ```

3. If configured correctly, you will receive an email at the address specified in the code.

## Notes

- Do **not** commit your `.env` file to version control.
- For Gmail, you may need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## License

ISC
```
