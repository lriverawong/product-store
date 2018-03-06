# Laravel Back-end with React Front-end

A product listing applicationg using laravel API for the backend with a ReactJs for the front-end.
Based on the following tutorial (with key-notes summarized)

    https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442
    https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-backend-part-2-react--cms-29443

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

### The Controller
Create the controller
```php
php artisan make:controller ProductsController
```

### Validation and Exception Handling
By default, Laravel uses `NotFoundHTTPException` to handle 404 errors. You can return a JSON response if you so choose by modifying <b>app/Exceptions/Handler.php</b>

You can setup model validations are the controller level. In the case of Products, you can modify the file: `app/HTTP/Controllers/ProductsController.php`


## Part 2: Frontend React

### Install React and Setup Basic Component
Using React Preset Command (Laravel 5.5)
```
php artisan preset react
npm install && npm run dev
```
Update `resources/assets/js/component/Main.js`, `resources/assets/js/app.js`, and `resources/views/welcome.blade.php`

Recompile assets in public dir
```
npm run dev
OR
yarn run dev
```

Run the watchs script to auto-compile the assets when any changes are detected
```
npm run watch
```

### Developing the React Application

#### Display all products
Core features:
- fetch all products from the API (GET /api/products)
- store the product data in its sate
- display the product data

Update `resources/assets/js/components/Main.js` to now render the <b>products</b>

Note: 
- We're initializing the state of products to an empty array in the constructor. 
- Once component mounts we use `fetch()` to retrieve the products from `/api/products` and store it in the state
- Render method sets up the UI

#### Displaying product data
Core features:
- track the clicked product and set it with an initial `null` value
- when a product is clicked then update the state of the current product
- list the product details on the right and until a certain product is clicked then display - "No product selected"

Update `resources/assets/js/components/Main.js` to how handle clicking of a <b>product</b>

Now to display the product data, we can either render it insdie the Main component or create a new component. A component called `Product` is created and the `Main` component pases its state as props. 

## Key points to look-at and note:
- Laravel
    - the setting up of API endpoints
    - CRUD for a user with API endpoints
- React
    - => function
    - mapping/lambda functions
    - onClick()
