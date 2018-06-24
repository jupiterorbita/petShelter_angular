var petController = require('../controllers/petController.js')
console.log('SERVER > CONFIG > routes.js');


module.exports = function(app){
    //Root retrieve / display all pets
    app.get('/pets', petController.getall);

    //Create
    app.post('/pets/new', petController.create);

    //Retrieve 1 details
    app.get('/pet/:id', petController.getone);

    //Update 
    app.put('/pets/:id/edit', petController.update)

    // delete
    app.delete('/pets/:id/delete', petController.delete)

    // app.post('/comment', cakeController.comment);
}

// Root route redirects to /pets and displays all pets

// Route ‘pets/new’ displays the form to create a new pet
// Successful creation and cancel redirect to the root route

// Route ‘/pets/:id’ displays all the details of a particular pet

// Route ‘/pets/:id/edit’ displays the pre-populated form to edit a pet
// Successful edit and cancel redirect to the pet’s details page