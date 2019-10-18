const ListValue = require('../../models/').C_LST_VAL;

async function getTaxs(req, res, next) {
    ListValue.findAll({
        where: { type: 'tax', }
    }).then(data => {
        res.status(200).json({
            mesage: 'got employees',
            data: data
        })
    }).catch(err => {
        res.send("Error " + err);
    })
}

async function getTax(req, res, next) {
    ListValue.findAll({
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

async function createTax(req, res, next) {
    console.log(req.body.data)
    try{
        let data = await ListValue.create({
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

async function updateTax(req, res, next) {
    console.log("DAATAAAA", req.body.newData)
    ListValue.findOne({
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

async function deleteTax(req, res, next) {
    ListValue.findOne({
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

module.exports = {
   getTaxs,
   getTax,
   createTax,
   updateTax,
   deleteTax
}