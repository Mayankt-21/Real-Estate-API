# Starting the Server and Environment

There are two environment variables set in `.env`:

```env
MONGO_URI = your_mongoDB_connection_string
PORT = where_you_want_to_run_the_server (default: 5000)
```
In the terminal go to `proptek backend/backend` and run `npm install` to install all required dependencies
Start `node server.js` in your terminal, your server should start running. To help troubleshoot in case of any issues errors will be logged to console

# API Endpoints and Postman Testing (PORT :`5000` )

1. POST```/properties```

  a. as in the snapshot <br>
  b. POST req body contains all the `Property` model entries - `name`, `location`, `price`, `availableUnits`<br>
  c. The request is first validated by a middleware to check for any null entries and if `price > 0` and `availableUnits > 0`<br>
  d. The request then goes to `createProperty`controller, from `propertyRoutes.js - POST('/')` and a new Property is successfully created <br>

![POST/properties](https://github.com/user-attachments/assets/88d7f92e-0c81-49cc-bd28-d30d02bf7239)

2. GET```/properties```

  a. as in the snapshot <br>
  b. GET request sends the request to `getProperty` controller, from `propertyRoutes - GET('/')` to fetch the properties
  c. The `getProperty` controller fetches all the properties where `avaialbleUnits : ${gt : 0}` (i.e., Properties whose `availableUnits > 0`)
  d. Cannot use Middleware - As the booking is made, availableUnits count is decreased and it will be difficult to keep a check

![GET/properties](https://github.com/user-attachments/assets/a596536a-2f20-477f-947d-dd98af967a71)

3. POST```/bookProperty```
  a. as in snapshot <br>
  b. POST req body contains all the `Booking` model entries - `userId`, `propertyId` ( here, `status [default : 'Pending']`  and `bookingDate [default : current Date]` are not set as they at their default state)
  c. This request too is first validated by a middleware which all the entries are filled, `propertyId` is valid and the property has `availbleUnits > 0`
  d. The request after successfull checks moves to `bookProperty` controller, from `bookingRoutes.js - POST('/')` where it fetches the Property details from `PropertyId`, checks if it is a valid Property that exists, and `availableUnits > 0`
  e. A mock Payment is set using `setTimeout`[10 secs] that changes the `Booking` status from `'Pending -> Confirmed` and `availableUnits` counts is `decreased by 1` from `Property`.
  f. A new Booking is registered after 10seconds - mocked for payment, it is assumed it takes 10 seconds for the payment where it returns `'Payment Processing'` and after 10seconds (when the payment is complete) it changes the status to `'Payment Completed. Booking Done'`.

![POST/bookProperty](https://github.com/user-attachments/assets/2785a00d-0b88-4d6c-9222-f818c312ca74)

![Payment Processing -> Payment Complete](https://github.com/user-attachments/assets/01376756-8949-4096-81a2-05d831a73efc)




