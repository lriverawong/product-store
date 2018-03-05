# Laravel Back-end with React Front-end

A product listing applicationg using laravel API for the backend with a ReactJs for the front-end.
Based on the following tutorial (with key-notes summarized)

    https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442

## Part 1: Backend Setup

### Initial Setup
- Download and configure Laradock
    - database and credentials, local storage
- Create the initial project
    - `composer create-project laravel/laravel <name>`
- Connect the app to the database

### The Router
- `routes/web.php`: hosts the route for the web interface
- `routes/api.php`: hosts the route for the API

End Points: 
- GET `/products/`: 
    - Retrieve all products.
- GET `/product/{id}`:
    - Retrieve the product that matches the id.
- POST `/products`: 
    - Create a new product and insert it into the database.
- PUT `/products/{id}`: 
    - Update an existing product that matches the id.
- DELETE `/products/{id}`:
    - Delete the product with the given id.

### The Product-Model
Create product entity
```php
php artisan make:model Product -m
```
By default Laravel assumes the <b>Product</b> model is associated with the <b>products</b> table. You can set it to a custom table name.
```php
protected $table = 'custom_products';
```
Allow attribute assignment for Products

<b>app/Product.php</b>
```php
/* Add the fillable property into the Product Model */
protected $fillable = ['title', 'description', 'price', 'availability']
```

### Database Seeding
Create seed class
```php
php artisan make:seed ProductsTableSeeder
```
Setup your `database/seeds/ProductsTableSeeder.php` file to generate fake products.

Run your seed file.
```php
php artisan db:seed --class=ProductsTableSeeder
```