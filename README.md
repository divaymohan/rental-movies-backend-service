# Rental Movies Backend Service

## Prerequisites to use:
* Node
* MongoDB compass to work with mongoDB.
* Postman for requests testing.

## How to use:
* Install Node
* install Git
* Run the command

 
      git clone https://github.com/divaymohan/rental-movies-backend-service.git
 
* Go to the cloned directory and run:
    
        npm install
 
* To install nodemon globally run :
 
        npm i nodemon -g 
 
* Run command to start server


        nodemon index.js

* if it shows message like listening at 3000 then API is ready to use.

## Requests:
```
Note:-
1. All the content inside `(` `)` is passed as parameters.

2. If we pass an id in body then that id should be present in database.
```
## 1. Genre Handler :
* ### Get all the generes in the store (Get Request):-
```
End Point:- 

localhost:3000/api/movies/genre/
```
* ### Get one genre by id (Get Request):-
```
End Point:- 

localhost:3000/api/movies/genre/(id)
``` 
* ### Delete one genre from store with id (Delete Request):- 
```
End Point:- 

localhost:3000/api/movies/genre/(id)
```
* ### Update already exist genre in store(put request):-
```    
End Point:-

localhost:3000/api/movies/genre/(id)

```
```json
Body:- 

{
    "genreName": "Horror"
}
``` 

* ### Add new genre in the store(Post request):- 
```
End Point:- 

localhost:3000/api/movies/genre/
```
```json
Body:-
{
     "genreName": "Horror"
}
```
## 2. Movie Handler :
* ### Get all the movies from store(Get request) :-
```
End Point:- 

localhost:3000/api/movies/movies
```
* ### Get one choosen movie from store using its id(Get Request):-
```
End Point:- 

localhost:3000/api/movies/movies/(id)
``` 
* ### Delete one movie from store (Delete Request):-
```
End Point:- 

localhost:3000/api/movies/movies/(id)
```
* ### Add new movie in store (Post Request):- 
```
End Point:-  

localhost:3000/api/movies/movies
```  
```json
Body:-

{
       "title":"Ghost",
       "genreId":"5eca8ae1e6f04a2db0a83cde",
       "numberInStock": 45,
       "dailyRantalRate": 25
}
```
## 3. Customer Handler :
* ### Get all the list of customers(Get Request):-
```
End Point:- 

localhost:3000/api/movies/customers
```
* ### Get one customer by its id(Get Request):-
```
End Point:- 

localhost:3000/api/movies/customers/(id)
```
* ### Remove one customer from history (Delete Request):-
```
End Point:- 

localhost:3000/api/movies/customers/(id)
```
* ### Add new customer to the store(Post Request):-
```
End Point:- 

localhost:3000/api/movies/customers
```
```json
Body:- 
{
       "name": "divay",
       "contactNumber": 8149958193,
       "isGold": true
}
```
* ### Update already exist customer(Put Request):-
```
End Point :- 

localhost:3000/api/movies/customers/(id)
```

```json
Body (isGold option is optional):-
{
       "name": "divay",
       "contactNumber": 8149958193,
       "isGold": true
}

```
## 4. Rental Handler :
* ### Get the list of all current rental(Get Request):-
```
End Point :-

localhost:3000/api/movies/rental/
```

* ### Get one perticular rental from current rentals(Get Request):-
```
End Point:- 

localhost:3000/api/movies/rental/(id)
```
* ### Delete One Rental(Delete Request):-
```
End Point:- 

localhost:3000/api/movies/rental/(id)
```
```json
Response:- 

{
        "customerName": "kiran",
        "pay": 345
}
```
* ### Add new Rental(Post Request) :- 
```
End Point:-

localhost:3000/api/movies/rental

```
```json
Body:-
{
       "customerId": "5ecb46bfe52ba336d818bc8d",
       "movieId": "5eca93dee7bf1e251caeae54",
       "rentalRate": 200
}
```


