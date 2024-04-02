# micro-frontend-poc

This project is a proof-of-concept for implementing a micro-frontend architecture. It aims to demonstrate how multiple independent frontend applications can be combined to create a cohesive user experience.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction
In this project, we explore the concept of micro-frontend architecture, which involves breaking down a monolithic frontend application into smaller, more manageable parts. Each part, known as a micro-frontend, is developed and deployed independently, allowing for greater flexibility and scalability.

## Description
The studentApp1 micro-frontend is a simple form application designed for managing student information. It allows users to input and submit student details, such as name, age, and grade. The form data can then be utilized by the other two micro-frontends in the project.

The studentApp1 micro-frontend serves as a standalone module that can be integrated into other applications seamlessly. It provides a user-friendly interface for capturing student data and can be easily customized to fit different use cases.

By breaking down the monolithic frontend into smaller, independent micro-frontends, the project demonstrates the benefits of modularity, independent deployment, and seamless integration in a micro-frontend architecture.


- **Modularity**: The project is divided into multiple micro-frontends, each responsible for a specific feature or functionality. This modular approach allows for easier development, testing, and maintenance.
- **Independent Deployment**: Each micro-frontend can be deployed independently, enabling teams to work on different parts of the application without interfering with each other's work.
- **Seamless Integration**: The micro-frontends are seamlessly integrated into a single user interface, providing a consistent and unified experience for the end-users.
- **Scalability**: The micro-frontend architecture allows for horizontal scaling, as new micro-frontends can be added or removed as needed, without affecting the overall system.

## Installation
To install and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/micro-frontend-poc.git`
2. Navigate to the project directory: `cd studentApp1`
3. Install the dependencies: `npm install`
4. repeat steps 2 & 3 for studentApp2 & studentApp3 subprojects

## Usage
To start the project, run the following command:
1. Navigate to the project directory: `cd studentApp1`
2. execure command: `npm start`
4. repeat steps 1 & 2 for studentApp2 & studentApp3 subprojects

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.