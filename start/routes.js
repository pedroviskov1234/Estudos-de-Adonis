'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.Register')
Route.post('/authenticate', 'AuthController.Authenticate')

Route.get('/app', 'AppController.index').middleware(['auth'])

Route.group(() => {
  Route.resource('tweet', 'TweetController').apiOnly().except('update')
}).middleware('auth')