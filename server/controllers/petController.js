const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {
    //=================  Root retrieve all INDEX =============
    getall: function(req, res) {
        console.log('\n SERVER > CONTROLLER > productController > showall');
        Pet.find({}, function(err, pet_arr){
          if (err) {
            console.log("\nReturned error", err);
            res.json({ message: "\nError", error: err });
          } else {
            console.log("successfully retreived all products!=>", pet_arr);
            res.json({ message: "\nSuccess", data: pet_arr });
          }
        });
      },


    //=================  Create /save ==================
    create: function(req, res) {
        console.log("\n SERVER >> CONTROLLER >> productController >> create: => req.body =>", req.body);
        var petInstance = new Pet(req.body);
        petInstance.save(function(err) {
        if (err) {
            console.log("we have an error", err);
            res.json({ message: "error", error: err });
        } else {
            console.log("successfully added a user!");
            res.json({ message: "Success save" });
        }
        });
    },

  //================== Retrieve 1 (by PET id) ==============
  getone: function(req, res) {
    Pet.findOne({ _id: req.params.id }, function(err, task) {
      if (err) {
        console.log("\nerr getting back one from server", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: task });
      }
    });
  },


  //============== Update / edit (by pet id) ===============
  update: function(req, res) {
    Pet.findOne({ _id: req.params.id }, function(err, pet) {
      pet.name = req.body.name;
      pet.type = req.body.type;
      pet.description = req.body.description;
      pet.skill1 = req.body.skill1;
      pet.skill2 = req.body.skill2;
      pet.skill3 = req.body.skill3;
      pet.save(function(err) {
        if (err) {
          console.log("we have an error", err);
            res.json({ message: "error", error: err });
        } else {
          console.log("successfully added a user!");
          res.json({ message: "Success save" });
        }
      }
    );
    });
},

    // ============ DELETE ===============
    delete: function(req, res) {
      console.log("@@@@@@@",req.params);
      
        Pet.remove({ _id: req.params.id }, function(err) {
        console.log("DELETEING PET =>", req.params.id);
        if (err) {
            console.log("\nerr getting back one from server", err);
            res.json({ message: "Error cannot delete", error: err });
        } else {
            res.json({ message: "Success deleted"});
        }
        });
    }

}