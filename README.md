# Fullstack Open

## How to Create a React Project with Vite

To create a React project using Vite, follow these steps:

1. Ensure you have npm version 7 or higher installed. If you don't have it, you can install it from [here](https://www.npmjs.com/get-npm).

2. Run the following command in your terminal:

    ```bash
    npm create vite@latest projectName -- --template react
    ```

    Make sure to replace `projectName` with the desired name for your project.

3. Navigate into your project directory:

    ```bash
    cd projectName
    ```

4. Install project dependencies:

    ```bash
    npm install
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

## Ignoring Prop Types Error in ESLint

To ignore the PropTypes error in ESLint, add the following rule to your `.eslintrc.cjs` file:

```json
{
  "rules": {
    "react/prop-types": 0
  }
}
```
