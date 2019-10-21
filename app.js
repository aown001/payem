const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const employeeRoutes = require('./api/routes/employees');
const userRoutes = require('./api/routes/users');
const taxRoutes = require('./api/routes/tax');
const contributionRoutes = require('./api/routes/contributions');
const deductionRoutes = require('./api/routes/deductions');
const codeRoutes = require('./api/routes/codes');
const authRoutes = require('./api/routes/auth');

app.use('/employees', employeeRoutes);
app.use('/users', userRoutes);
app.use('/tax', taxRoutes);
app.use('/contributions', contributionRoutes);
app.use('/deductions', deductionRoutes);
app.use('/codes', codeRoutes);
app.use('/auth', authRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message
    })
})

module.exports = app;