const User = require('./models/User');
const mathOperations = require('./utils/mathOperations');
const vehicleController = require('./controllers/vehicleController');

// Crear un usuario
const user = new User('Carlos', 30);
user.greet();

// Operaciones matemáticas
const sum = mathOperations.add(5, 3);
const difference = mathOperations.subtract(10, 4);
console.log(`Suma: ${sum}, Resta: ${difference}, PI: ${mathOperations.PI}`);
