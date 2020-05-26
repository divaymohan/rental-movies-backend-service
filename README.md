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
All the content inside `(` `)` is passed as parameters.
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

* ### Add new genre in the store(post request):- 
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
* ### Get all the movies from store:-
* ### Get one choosen movie from store using its id:- 
* ### Delete one movie from store :-
* ### Update one movie in store:-
* ### Add new movie in store:-   
## 3. Customer Handler :
* ### Get all the list of customers:-
* ### Get one customer by its id:- 
* ### Remove one customer from history:-
* ### Add new customer to the store:-

## 4. Rental Handler :
* ### Get the list of all current rental:- 
* ### Get one perticular rental from current rentals:-
* ### Delete One Rental:-
* ### Add new Rental:- 
   


