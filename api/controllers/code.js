const ListValue = require('../../models/').C_LST_VAL;

async function getCodes(req, res, next) {
    ListValue.findAll({
        where: { type: 'money code', }
    }).then(data => {
        res.status(200).json({
            mesage: 'got record',
            data: data
        })
    }).catch(err => {
        res.send("Error " + err);
    })
}

async function getCode(req, res, next) {
    ListValue.findAll({
        where: { row_id: req.params.id, }
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

async function createCode(req, res, next) {
    console.log(req.body.data)
    try {
        let data = await ListValue.create({
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

async function updateCode(req, res, next) {
    console.log("DAATAAAA", req.body.newData)
    ListValue.findOne({
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

async function deleteCode(req, res, next) {
    ListValue.findOne({
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
    getCodes,
    getCode,
    createCode,
    updateCode,
    deleteCode,
}