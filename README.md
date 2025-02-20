# Restaurant Review App

## Description
This is a web application that allows users to view restaurants, read reviews, and leave their own ratings. The application is built using the MERN stack (MongoDB, Express, React, Node.js) with a focus on the backend functionality.

## Project Structure
```
restaurant-review-app-backend
├── src
│   ├── controllers
│   │   └── reviewController.js
│   ├── models
│   │   └── reviewModel.js
│   ├── routes
│   │   └── reviewRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/restaurant-review-app-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd restaurant-review-app-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The application will be running on `http://localhost:5000`.

## API Endpoints

- `GET /reviews` - Retrieve all reviews
- `POST /reviews` - Create a new review
- `DELETE /reviews/:id` - Delete a review by ID

## Contributing
Feel free to submit issues or pull requests for any improvements or features you would like to see.

## License
This project is licensed under the MIT License.