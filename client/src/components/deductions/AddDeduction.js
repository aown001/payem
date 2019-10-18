import React from 'react';
import FormSection from '../widgets/FormSection';
import * as Yup from 'yup';
import Validation from '../validation/Validation';
import axios from 'axios';
import Snackbar from '../widgets/Snackbar';

const DeductionFields = [
    { type: 'TextField', label: 'Name', name: 'val' },
    { type: 'TextArea', label: 'Description', name: 'ATTRIB_03'  },
    {
        type: 'Select', label: 'Method', options: [{ label: 'Fixed', value: 'Fixed' },
        { label: 'Percentage', value: 'Percentage' },
        ], 
        name: 'ATTRIB_06'
    },
    { type: 'TextField', label: 'Amount', name: 'ATTRIB_14' },
    { type: 'TextField', label: 'Amount Per Day', name: 'ATTRIB_15' },
]

const Sections = [
    {
        heading: 'Deduction Details',
        data: DeductionFields
    },
]

const ValidationSchema = Yup.object().shape({
    val: Yup.string()
        .max(30, 'Name is Too Long!')
        .required('Name is Required'),
    ATTRIB_03: Yup.string()
        .max(50, 'Description is Too Long'),
    ATTRIB_06: Yup.string()
        .required('Method is Required'),
    ATTRIB_14: Yup.number()
        .typeError('Amount Must be a Number')
        .positive("Amount Must be a Positive Number")
        .integer("Amount Must be an Integer (No Decimals)"),
    ATTRIB_15: Yup.number()
        .typeError('Amount Per Day Must be a Number')
        .positive("Amount Per Day Must be a Positive Number")
        .integer("Amount Per Day Must be an Integer (No Decimals)")
        .lessThan(Yup.ref('ATTRIB_14'), "Amount Per Pay should be less than Amount"),
});

export default function AddDeduction() {
    const initialData = {
        type: 'deduction'
    }
    const [data, setdata] = React.useState(initialData);
    const [errors, setErrors] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({ open: false, });

    const onFormSubmit = async (e) => {
        e.preventDefault();

        let err = await Validation(ValidationSchema, data, )
        if (err.isValid === false) {
            console.log(err.isValid)
            setSnackbar({ ...snackbar, open: true, variant: 'error', message: 'Error Adding Deduction' });
            setErrors(err.errors);
        } else {
            console.log(err.isValid)
            axios.post(`http://localhost:4000/deductions`, { data })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setSnackbar({ ...snackbar, open: true, variant: 'success', message: 'Deduction Added Successfully' });
                })
            console.log(data)
        }
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({ ...snackbar, open: false })
        setdata({ ...initialData });
    }

    const onChangeValue = (e) => {
        let name = e.target.name
        let value = e.target.value
        setdata({ ...data, [name]: value })
    }

    return (
        <div>
        <FormSection
                fields={Sections}
                handleChange={onChangeValue}
                data={data}
                onFormSubmit={onFormSubmit}
                errors={errors}
            />
            <Snackbar
                variant={snackbar.variant}
                message={snackbar.message}
                open={snackbar.open}
                handleClose={handleSnackbarClose}
            />
        </div>
    )
}
