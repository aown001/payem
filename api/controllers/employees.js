const Employees = require('../../models/').C_EMP;
const ProfileAttributes = require('../../models/').C_EMP_XM;

async function getEmployees(req, res, next) {
    Employees.findAll({
    }).then(data => {
        res.status(200).json({
            mesage: 'got employees',
            data: data
        })
    }).catch(err => {
        res.send("Error " + err);
    })
}

async function getEmployee(req, res, next) {
    Employees.findAll({
        where: { row_id: req.params.id }
    }).then(data => {
        res.status(200).json({
            messgae: 'got employee',
            iddd: req.params.id,
            data: data
        })
    }).catch(err => {
        res.send("Error " + err)
    })
}

async function createEmployee(req, res, next) {
    console.log(req.body.data)
    try{
        let data = await Employees.create({
            ...req.body.data
        })
        res.status(200).json({
            status: 200,
            data,
            message: 'Employee was created'
        })
    }

    catch(err){
        err.status = 400
        err.message = `Database Error: ${err}`
        next(err)
        console.log(err)
    }
}

async function updateEmployee(req, res, next) {
    console.log("DAATAAAA", req.body.newData)
    Employees.findOne({
        where: { row_id: req.params.id }
    }).then(employee => {
        if (employee) {
            employee.update(
                req.body.newData
            ).then(employee => {
                console.log("UPDATED DATAAAA", employee)
                res.status(200).json({
                    data: employee,
                    messge: 'employee was updated'
                })
            }).catch(err => {
                console.log("ERRRRRRORRRR ", err)
                res.send("Error " + err)
            })
        }
    })
        .catch(err => {
            console.log("ERRRRRRRR " + err)
            res.send("Error " + err)
        })
}

async function deleteEmployee(req, res, next) {
    Employees.findOne({
        where: { row_id: req.params.id }
    }).then(employee => {
        if (employee) {
            employee.destroy({}).then(employee => {
                res.status(200).json({
                    messgae: 'employee was deleted'
                })
            })
        }
    }).catch(err => {
        res.send("Error " + err)
    })
}





async function getContributions(req, res, next) {
    ProfileAttributes.findAll({
        where: { type: 'contribution', }
    }).then(data => {
        res.status(200).json({
            mesage: 'got record',
            data: data
        })
    }).catch(err => {
        res.send("Error " + err);
    })
}

async function getContribution(req, res, next) {
    ProfileAttributes.findAll({
        where: { par_row_id: req.params.id, type: 'contribution' }
    }).then(data => {
        res.status(200).json({
            messgae: 'got record',
            iddd: req.params.id,
            data: data
        })
    }).catch(err => {
        res.send("Error " + err)
    })
}

async function createContribution(req, res, next) {
    console.log(req.body.data)
    try {
        let data = await ProfileAttributes.create({
            ...req.body.data
        })
        res.status(200).json({
            status: 200,
            data,
            message: 'Record was created'
        })
    }

    catch (err) {
        err.status = 400
        err.message = `Database Error: ${err}`
        next(err)
        console.log(err)
    }
}

async function updateContribution(req, res, next) {
    console.log("DAATAAAA", req.body.newData)
    ProfileAttributes.findOne({
        where: { row_id: req.params.id }
    }).then(value => {
        if (value) {
            value.update(
                req.body.newData
            ).then(value => {
                console.log("UPDATED DATAAAA", value)
                res.status(200).json({
                    data: employee,
                    messge: 'record was updated'
                })
            }).catch(err => {
                console.log("ERRRRRRORRRR ", err)
                res.send("Error " + err)
            })
        }
    })
        .catch(err => {
            console.log("ERRRRRRRR " + err)
            res.send("Error " + err)
        })
}

async function deleteContribution(req, res, next) {
    ProfileAttributes.findOne({
        where: { row_id: req.params.id }
    }).then(value => {
        if (value) {
            value.destroy({}).then(value => {
                res.status(200).json({
                    messgae: 'Record was deleted'
                })
            })
        }
    }).catch(err => {
        res.send("Error " + err)
    })
}





    async function getDeductions(req, res, next) {
        ProfileAttributes.findAll({
            where: { type: 'deduction', }
        }).then(data => {
            res.status(200).json({
                mesage: 'got record',
                data: data
            })
        }).catch(err => {
            res.send("Error " + err);
        })
    }
    
    async function getDeduction(req, res, next) {
        ProfileAttributes.findAll({
            where: { par_row_id: req.params.id, type: 'deduction' }
        }).then(data => {
            res.status(200).json({
                messgae: 'got record',
                iddd: req.params.id,
                data: data
            })
        }).catch(err => {
            res.send("Error " + err)
        })
    }
    
    async function createDeduction(req, res, next) {
        console.log(req.body.data)
        try {
            let data = await ProfileAttributes.create({
                ...req.body.data
            })
            res.status(200).json({
                status: 200,
                data,
                message: 'Record was created'
            })
        }
    
        catch (err) {
            err.status = 400
            err.message = `Database Error: ${err}`
            next(err)
            console.log(err)
        }
    }
    
    async function updateDeduction(req, res, next) {
        console.log("DAATAAAA", req.body.newData)
        ProfileAttributes.findOne({
            where: { row_id: req.params.id }
        }).then(value => {
            if (value) {
                value.update(
                    req.body.newData
                ).then(value => {
                    console.log("UPDATED DATAAAA", value)
                    res.status(200).json({
                        data: employee,
                        messge: 'record was updated'
                    })
                }).catch(err => {
                    console.log("ERRRRRRORRRR ", err)
                    res.send("Error " + err)
                })
            }
        })
            .catch(err => {
                console.log("ERRRRRRRR " + err)
                res.send("Error " + err)
            })
    }
    
    async function deleteDeduction(req, res, next) {
        ProfileAttributes.findOne({
            where: { row_id: req.params.id }
        }).then(value => {
            if (value) {
                value.destroy({}).then(value => {
                    res.status(200).json({
                        messgae: 'Record was deleted'
                    })
                })
            }
        }).catch(err => {
            res.send("Error " + err)
        })
}


module.exports = {
    getEmployee,
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,

    getContributions,
    getContribution,
    createContribution,
    updateContribution,
    deleteContribution,

    getDeductions,
    getDeduction,
    createDeduction,
    updateDeduction,
    deleteDeduction,
}