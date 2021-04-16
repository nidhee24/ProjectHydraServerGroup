## Project Server - Group Submission

## Name: Jenil Soni
## Student ID: N01415734
## Task Performed 
    -[x] Create server side for three feature - Restaurant, Blog and Review 
    -[x] Enables cors for the resprective API.
    -[x] In Restaurant, I have displayed restaurant which can be search by location. 
    -[x] User can see blog about various activity, places and restaurants. For blog, admin can add blog via server and also, makes static page as well.
    -[x] Users can share thier experiance about places, hotels, restaurant and service.
    
## Name: Raymiljit Kaur
## Student ID: N01356496
## Task Performed 
   - [x] Created server side for three feature: Career, Activities and Support.
   - [x] And enabled cors for the respective API.
   - [x] In the Career feature i will trying to display the work-culture for the company.
          For my Career page model i have firstname, lastname, emaill and job  te applicant wants to apply for 
          and also in order to apply for the applicants needs login beforehand.With help of this feature the applicant can 
          look into various job opportunities and apply for the one's they are interested in.
   - [x] In my second feature which is activity i will be displaying some activities happening around the world and user will be able
          to register for these activities througha form which they can fill and post only once they registered and logged-in.
          The model for this particular feature contains details about the user like name, email,phone and activity they want to register for.
   - [x] In the last feature which is support , its more about where a user can ask for the queries they might have for their booking
          or it can be anything relayed to their stay and billing or any other issue they have. In this user should be registered 
          and will have to give a subject of their query adn also description about it along with their email so that they can receive a response there.
          For this i created a model with name , email, subject of query and the query itself.
   - [x] For these features i have completed the CRUD functionality and have my API tested on Postman.
   - [x] Pages i worked on: Career.js,Activity.js,Support.js,careerRoute.js,actvityRoute.js,supportRoute.js and index.js
   
    
## Name: Prabhjot Singh
## Student ID: N01398271
## Task Performed 
    -[x] Created server side for three feature: User Login, Signup, Remove, View Pacakage, Add new Package

    -[x] Login and Register:  Now user can create their account, I have used express-validator
    to validate user credentials, I am using jason webtoken to carry payload, bcrypt library has
    been uses to encrypt the password before it is added to the database collection which is important
    in terms of secrity, Now user can authenticated if there account exist and they enter correct 
    password(bcrypt will compare both hashed passwords). Login and register are also integrated on
    client side. In the user model we have email, password and name. All the required validations are in place.

    -[x] Remove User: User can also be removed, if user wants to remove thier account.

    -[x] Middleware: To validate a user token is created when user loggs, middleware has been used for this purpose.
    
    -[x] Packages: API has been created to add new packages to database collection only authorized
    user can add package, which is ensured by checking if the token is valid(middleware). Now we 
    can list packages that exist in the database, this has also been integrated on client side. 
    In the package model we have location name, description, price, image urls.

    -[x] Enabled cors for the respective API

## Name : Nidhi Patel
## Student Number: N01434561
## Server Part

## Tasks
- [x] Created Server side for three features: roombook, hotelroom, deals and about page.
- [x] Also enabled cors for respective API.
- [x] In roombook and hotelroom feature I first of all created API for hotelroom which display the hotel details like hotel room image, name and price of hotel and when user click on book button, a form will display and for that I created roombook API for registration of rooms.
- [x] Deals will have various deals available for user and for that I have created deal api and performed various CRUD operation.
- [x] About page will display the information of website for which I  created About api from which the data is to be get.
- [ ] I am learning to send an email to the users who booked the hotel and would try to implement it if possible.
 

## Name : Hardik Vineshkumar Modi
## Student Number: N01427214
## Server Part

## Tasks
- [x] Created Server side for three features: Rentals, FlightsBooking and Payment.
- [x] Also enabled cors for respective API.
- [x] In Rentals, user would be able to view details such as title, location and tariff and he'd be able to book his prefferred HomeStays on Owner's availibility.
- [x] In FlightsBooking, user would be able to book flight using flight name, departure arrival of his choice and he'd be able to see prices for that flight.
- [x] In Payment, user would be able to finalize his package details and will have to provide his traveller details such as first name, last name, city, province, country, zip code and card details as well.

 

