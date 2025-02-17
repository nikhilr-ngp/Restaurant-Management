import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'LoginController.login')

// Users
Route.get('/users', 'UsersController.all_users')
Route.post('/users', 'UsersController.create_users')
Route.put('/users/:id', 'UsersController.update_user')
Route.delete('/users/:id', 'UsersController.delete_user')

// Menu Items
Route.get('/menu-items', 'MenuItemsController.show_menu')
Route.post('/menu-items', 'MenuItemsController.add_menu_item')
Route.put('/menu-items/:id', 'MenuItemsController.update_menu')


Route.get('/orders/:order_id/items', 'OrderItemsController.orderitems')
Route.post('/orders/:order_id/items', 'OrderItemsController.create_orderitems')
Route.put('/order-items/:id', 'OrderItemsController.update_items')
Route.delete('/order-items/:id', 'OrderItemsController.delete_items')

Route.get('/reservations', 'ReservationsController.all_reservations')
Route.post('/reservations', 'ReservationsController.create_reservations')
Route.put('/reservations/:id', 'ReservationsController.update_reservations')
Route.delete('/reservations/:id', 'ReservationsController.delete_reservations')
