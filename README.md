# micro-frontend-poc

This project is a proof-of-concept for implementing a micro-frontend architecture. It aims to demonstrate how multiple independent frontend applications can be combined to create a cohesive user experience.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Requirements
To run this project, you need to have the following software installed on your system:
- Node.js v18.18.2
- npm 9.8.1

Make sure you have the correct versions of Node.js and npm installed before proceeding with the installation steps.



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

## Techical details.

Files like `webpack.config.js` and `.babelrc` are commonly used in JavaScript projects to configure and customize the build process and transpilation of code.

1. **webpack.config.js**: 
The `webpack.config.js` file is used to configure the behavior of webpack, which is a popular module bundler for JavaScript applications. Webpack takes all the different modules and assets in your project and bundles them into a single file or multiple files that can be served to the browser. This file allows you to define various settings and options for webpack, such as entry points, output paths, loaders, and plugins.

- **Entry points**: You can specify the entry point(s) of your application, which is the starting point for webpack to analyze and bundle your code. This can be a single file or multiple files depending on your project structure.

- **Output configuration**: You can define the output configuration, such as the output path and filename for the bundled JavaScript files. This determines where the bundled files will be saved.

- **Loaders**: Loaders are used to preprocess files before they are added to the bundle. For example, you can use loaders to transpile JavaScript using Babel, preprocess CSS with PostCSS, or optimize images. Loaders are defined in the `module.rules` section of the webpack configuration.

- **Plugins**: Plugins are used to perform a wide range of tasks during the webpack build process. They can be used for tasks like code optimization, asset management, and generating HTML files. Plugins are defined in the `plugins` section of the webpack configuration.

2. **.babelrc**:
The `.babelrc` file is used to configure Babel, which is a popular JavaScript compiler that allows you to write modern JavaScript code and convert it into a compatible version that can run in older browsers or environments. Babel uses plugins and presets to transform your code.

- **Presets**: Presets are preconfigured sets of plugins that define how Babel should transform your code. They are defined in the `.babelrc` file under the `presets` section. For example, the `@babel/preset-env` preset is commonly used to transform modern JavaScript syntax into compatible code based on the target environment.

- **Plugins**: Plugins are used to enable additional transformations or features in Babel. They can be added to the `.babelrc` file under the `plugins` section. Plugins allow you to customize the behavior of Babel and add specific transformations to your code.

By configuring these files, you can customize the build process and transpilation of your JavaScript code according to your project's requirements. This allows you to optimize your code, handle different environments, and use modern JavaScript features while ensuring compatibility with older browsers.


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