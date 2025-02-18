# Starting the Server and Environment

1. There are two environment variables set in `.env`:

```env
MONGO_URI = your_mongoDB_connection_string
PORT = where_you_want_to_run_the_server (default: 5000)
```
2. In the terminal go to ```proptek backend/backend``` and run ```npm install``` to install all required dependencies
3. To start the server : ```node server.js``` in your terminal, your server should start running. To help troubleshoot in case of any issues errors will be logged to console

# API Endpoints and Postman Testing
1. POST```/properties```
![](../Screenshot%202025-02-18%20225337.png)
2. GET```/properties```
![](../Screenshot%202025-02-18%20225440.png)
3. POST```/bookProperty```
![](../Screenshot%202025-02-18%20225546.png)

