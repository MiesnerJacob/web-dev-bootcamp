// Create Object Constructor
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience
  this.name = name
  this.cleaningRepertoire =  cleaningRepertoire
  this.clean = function () {
    alert("Cleaning in Progress")
  }
}

// Create Object
var houseKeeper1 = new HouseKeeper(12, "Jacob", ["Vaccum", "Scrubbing"]);

// Call clean function
houseKeeper1.clean();
