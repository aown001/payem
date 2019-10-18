
export default function Validation(ValidationSchema, data, ) {
    let response = {
        isValid: true,
        errors: []
    }
    return new Promise(resolve => {
        ValidationSchema
            .isValid(data)
            .then(function (valid) {
                if (valid === false) {
                    console.log("Falseeee ")
                    ValidationSchema.validate(data, { abortEarly: false })
                        .then(function (values) {
                            console.log(values)
                        })
                        .catch(function (err) {
                            response = {
                                isValid: valid,
                                errors: err.errors
                            }
                            resolve(response)
                            // setErrors(err.errors);
                        });
                }
                else {
                    console.log("VALID true")
                    resolve(response)
                }
            })
    })


}