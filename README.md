<div style="display: flex; justify-content:center; gap: 25px;">
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
</div>

# NestJS Email Sender 



NestJS Email Sender is a simple web application built with NestJS that allows users to send emails via a Gmail account. The application provides a REST API that accepts HTTP POST requests with a JSON payload containing the email recipient, subject, and body.



The application uses the nodemailer library to send emails via SMTP. Users can configure the SMTP settings by setting environment variables in a .env file.

The application also provides API documentation using Swagger UI. Users can explore and test the API using the user-friendly Swagger UI interface.

## Installation

To install the application, clone the repository, install the dependencies, and start the application:

```
git clone https://github.com/your-username/nestjs-email-sender.git
cd nestjs-email-sender
npm install
npm start
```

## Usage

To send an email, send an HTTP POST request to the /api/mail endpoint with a JSON payload containing the recipient, subject, and body:

```{
  "to": "recipient@example.com",
  "subject": "Hello, World!",
  "text": "This is a test email sent via NestJS Email Sender."
}
```

The application will send the email via SMTP and return a JSON response with a success message.

To view the API documentation, open Swagger UI in your web browser at http://localhost:8080. The Swagger UI provides a user-friendly interface for exploring and testing the API.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

This Markdown code block describes the NestJS Email Sender project, including its features, installation instructions, usage instructions, and license information. The code block can be copied and pasted into a Markdown document to provide a clear and concise summary of the project.

