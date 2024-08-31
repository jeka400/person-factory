# React TypeScript Application with Factory Design Pattern

This is a simple React application built with TypeScript and Bootstrap. 
The application uses the Factory design pattern to categorize a Person based on their date of birth into different age groups: `Infant`, `Child`, or `Adult`. 
The application features specialized classes to handle the behavior of each category.

## Features

- **React** for building the user interface
- **TypeScript** for static typing
- **Bootstrap** for styling
- **Factory Design Pattern** to dynamically create instances based on a person's age
- Categorizes persons as `Infant`, `Child`, or `Adult` based on their date of birth
- Defines behavior for each category through specialized classes
- Implements common properties and methods for all categories using the `Person` class

## Usage

This application uses the Factory design pattern to create instances of different person categories (`Infant`, `Child`, and `Adult`) based on the person's date of birth. The application contains:

- A **Person** class that includes common properties and methods:
  - `category`: Determines if the person is an `Infant` (age <= 2), `Child` (2 < age < 18), or `Adult` (age >= 18).
  - `canSignContract()`: A method that returns `true` if the person is 18 years or older.
  - `printDetails()`: A method to print the details of the person.

- A **PersonFactory** class that determines the category of a person based on their age and returns an instance of the appropriate specialized class (`Infant`, `Child`, `Adult`).

## Installation

To run this application on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/repository-name.git

2. **Navigate to the project directory:**

   ```bash
   cd person-factory

3. **Install dependencies:**

   ```bash
   npm install

3. **Start the development server::**

   ```bash
   npm start
   
The application will be available at http://localhost:3000.