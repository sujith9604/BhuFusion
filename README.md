# GrossFresh - Online Agricultural Marketplace

GrossFresh is an online agricultural marketplace where farmers, customers, agricultural research and development (ARD), and agricultural machinery dealers (AMD) can interact and conduct various agricultural-related activities.

## Project Structure

```
.
│   index.js
│   package-lock.json
│   package.json
│   README.md
│
├───controllers
│       amd.js
│       Customer.js
│       Farmer.js
│       login.js
│
├───data
│       data.json
│       database.js
│       db.sql
│       output.csv
│
├───public
│   └───styles
│           amd.css
│           ard.css
│           cart.css
│           cartCus.css
│           loginStyle.css
│           registerStyle.css
│           reset.css
│           showResultsStyle.css
│           style.css
│           styleProfile.css
│
├───routes
│       amdRoutes.js
│       ardRoutes.js
│       cart.js
│       customerRoutes.js
│       farmerRoutes.js
│       loginRoutes.js
│       payments.js
│       profile.js
│       registerRoutes.js
│       show.js
│
└───views
        Amd_Dashboard.ejs
        Ard_Dashboard.ejs
        cart.ejs
        Customer_Dashboard.ejs
        Farmer_Dashboard.ejs
        farmer_upload.ejs
        Fertilizers.ejs
        index.ejs
        login.ejs
        Machinerys.ejs
        payments.ejs
        Pesticides.ejs
        profile.ejs
        register.ejs
        seeds.ejs
        showResults.ejs
        Vegitables.ejs
```

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/grossfresh.git
    ```

2. Navigate to the project directory:

    ```bash
    cd grossfresh
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and go to `http://localhost:3000` to access the GrossFresh application.

## Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt): For password hashing and encryption.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request bodies.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS).
- [ejs](https://www.npmjs.com/package/ejs): Embedded JavaScript templates for rendering HTML pages.
- [express](https://www.npmjs.com/package/express): Web framework for Node.js applications.
- [express-session](https://www.npmjs.com/package/express-session): Middleware for managing user sessions in Express.js.
- [multer](https://www.npmjs.com/package/multer): Middleware for handling multipart/form-data (file uploads).
- [mysql](https://www.npmjs.com/package/mysql): MySQL database driver for Node.js.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility for automatically restarting the server during development.
- [passport](https://www.npmjs.com/package/passport): Authentication middleware for Node.js.
- [passport-local](https://www.npmjs.com/package/passport-local): Passport strategy for authenticating with a username and password.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.
