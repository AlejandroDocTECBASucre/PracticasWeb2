const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 1, username: "alejandro" }, "mi_clave");
console.log(token);

// Verificar y decodificar
const decoded = jwt.verify(token, "mi_clave");
console.log(decoded);
