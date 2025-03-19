# School Management API

This is a simple School Management API built using Node.js, Express, and MySQL. The API allows you to add schools to a database and list schools sorted by their proximity to a given location.
## Deployed URL
https://school-management-api-iaif.onrender.com

## Features

- **Add a School**: Add a new school to the database with details like name, address, latitude, and longitude.
- **List Schools**: Fetch all schools from the database, sorted by their distance from a given latitude and longitude.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: A relational database management system.
- **Postman**: A tool for testing APIs.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/school-management.git
   cd school-management

  ### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file and define the necessary environment variables:
```
DB_HOST=MySql_connection_string
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=database_name
```

### Running the Server
#### Development Mode (with auto-restart using nodemon)
```sh
npm run server
```
#### Production Mode
```sh
npm server.js
``` 
## API Endpoints
#### Add School
## Request
```json
{
  "name": "Holy Child Public School",
  "address": "123 Main St, Bangalore",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```
## Response
```json
{
    "message": "School added successfully",
    "id": 17
}
```
#### List of Schools(Based on location)
## Response
```json
[
    {
        "id": 12,
        "name": "Greenwood High",
        "address": "123 Main St, Bangalore",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "distance": 0
    },
    {
        "id": 17,
        "name": "Holy Child Public School",
        "address": "123 Main St, Bangalore",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "distance": 0
    },
    {
        "id": 13,
        "name": "Sunrise Academy",
        "address": "456 Elm St, Chennai",
        "latitude": 13.0827,
        "longitude": 80.2707,
        "distance": 290.1720249530612
    },
    {
        "id": 16,
        "name": "Silver Oaks School",
        "address": "654 Birch St, Hyderabad",
        "latitude": 17.385,
        "longitude": 78.4867,
        "distance": 499.9932408970139
    },
    {
        "id": 14,
        "name": "Golden Valley School",
        "address": "789 Oak St, Mumbai",
        "latitude": 19.076,
        "longitude": 72.8777,
        "distance": 845.3183856559485
    },
    {
        "id": 15,
        "name": "Maple Leaf International",
        "address": "321 Pine St, Delhi",
        "latitude": 28.7041,
        "longitude": 77.1025,
        "distance": 1750.11476241321
    }
]
```
