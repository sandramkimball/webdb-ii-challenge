
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { 
          vin: 'J5BG7E052666',
          make: 'Dodge', 
          model: 'Ram', 
          mileage: 123500,
          transmission: 'Automatic',
          titleStatus: 'Clear',
        },
        { 
          vin: 'H8F83AE051A66',
          make: 'VW', 
          model: 'Bus', 
          mileage: 177460,
          transmission: 'Manual',
          titleStatus: 'Reconstructed',
        },
        { 
          vin: 'R5F8G5E052526',
          make: 'Audi', 
          model: 'RS Q3', 
          mileage: 50,
          transmission: 'Automatic',
          titleStatus: 'Clear',
        },
        { 
          vin: 'J5F83AE052666',
          make: 'Jeep', 
          model: 'Wrangler', 
          mileage: 54720,
          transmission: 'Automatic',
        },
      ]);
    });
};
