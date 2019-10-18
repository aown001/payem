const employeeRoutes = require('./employees');
const taxRoutes = require('./tax');

module.exports = function(app, db) {
    app.use('/employees', employeeRoutes)
    
}