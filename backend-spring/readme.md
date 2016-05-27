### ABI-3 Interview Project

#### Technologies used in the project

* Maven
* Spring Boot stack
    * Spring Data JPA (for persistence)
    * Spring MVC (for REST endpoints)
* Swagger UI (for API quick testing)

#### Prerequisites

* Oracle JDK 1.7 or 1.8
* Maven
* IDE or editor of your choice

#### Getting started

To start this web application just follow these steps:

1. Build the project via Maven:

    <code>$ mvn clean install</code>

2. Start the application:
    * In your IDE invoke the class method <code>com.audi.interview.booking.Application#main</code> to start the server , *or*
    * From command line execute:

    <code>$ java -jar target/booking-0.1-SNAPSHOT.jar</code>

3. Browse to the application root for API documentation:

    [http://localhost:8080/](http://localhost:8080)

#### Additional information

* Spring boot automatically provides an embedded Tomcat server and a persistence layer based on Hibernate (as JPA provider).
* Data are automatically stored in an in-memory database. Changes are lost after restarting the application.
* All REST endpoints can be tested locally with the Swagger UI frontend:

    [http://localhost:8080/](http://localhost:8080)

#### Tasks

##### Backend Part

1. The customer wants the functionality to search for users by last name:
    * Implement a new method in the <code>UserService</code> class that returns users by a given name
    * Extend the existing API to expose the new functionality

2. The customer wants to be able to insert new vehicles into the system via the API
    * Implement an appropriate extension of the vehicle controller with suitable REST endpoint
    * Persist new data
    * (Optional) Validate the input data:
        * all vehicle fields should be mandatory
        * field <code>validTill</code> should be at least a future date

##### Frontend Part

The customer wants you to create a proof of concept for a nice JavaScript driven frontend admin console to manage users
and vehicles. There are no detailed or technical specifications given except:

* It should look nice
* Intuitive to use
* All implemented API functionality should be covered in the frontend
    * Display all vehicles
        * Insert new vehicle
    * Display all users
        * Provide search by last name functionality
        * Show details of specific user

3. Create a nice and intuitive frontend application as proof of concept that covers the given API functionality.
Technically you are completely free, just choose an adequate tool stack.

    * AngularJs or ReactJs are quite popular, but any other frontend framework is fine, too.
    * Talk to the provided API endpoints and find intuitive ways to display the data and a small navigation
    * Single page application is preferred
    * Focus on usability in views
    * (Optional) Include frontend input validation
    * (Optional) Focus on modularity in architecture

Some Audi colors:

    $black:                  #000;
    $gray-darker:            #394249;
    $gray-dark:              #434C53;
    $gray:                   #6D7579;
    $gray-light:             #B0B6B8;
    $gray-lighter:           #D5D9D8;

    $audi-red:               #CC0033;
    $audi-dark-red:          #AA142D;

There is a placeholder html page for your implementation at:

[http://localhost:8080/admin/index.html](http://localhost:8080/admin/index.html)

The file is located under <code>src/main/resources/static/admin/index.html</code>.

### Happy coding!
