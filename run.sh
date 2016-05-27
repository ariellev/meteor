#!/bin/bash
cd "$(dirname "$0")"
cd frontend-meteor
meteor &
cd ..
mvn clean install -f backend-spring/pom.xml && java -jar backend-spring/target/booking-0.1-SNAPSHOT.jar &
sleep 5
open http://localhost:3000/