import React from 'react';
import FormSection from '../widgets/FormSection';
import * as Yup from 'yup';
import Validation from '../validation/Validation';
import Snackbar from '../widgets/Snackbar';
import axios from 'axios';

const Fields = [
    { type: 'TextField', label: 'Name', name: 'val' },
    { type: 'TextField', label: 'Amount From', name: 'ATTRIB_11' },
    { type: 'TextField', label: 'Amount Upto', name: 'ATTRIB_12' },
    { type: 'TextField', label: 'Fixed Amount', name: 'ATTRIB_13' },
    { type: 'TextField', label: '% Tax', name: 'ATTRIB_17' },
    { type: 'TextArea', label: 'Description', name: 'ATTRIB_02' },
]

const Sections = [
    {
        heading: 'Tax Details',
        data: Fields
    },
]

const ValidationSchema = Yup.object().shape({
    val: Yup.string()
        .max(30, 'Name is Too Long!')
        .required('Name is Required'),
    ATTRIB_11: Yup.number()
        .required('Amount From is Required')
        .typeError('Amount From Must be a Number')
        .lessThan(Yup.ref('ATTRIB_12'), "Amount From should be less than Amount Upto"),
    ATTRIB_12: Yup.number()
        .required('Amount Upto is Required')
        .typeError('Amount Upto Must be a Number'),
    ATTRIB_13: Yup.number()
        .typeError('Fixed Amount Must be a Number'),
    ATTRIB_17: Yup.number()
        .typeError('Percentage Must be a Number'),
    ATTRIB_02: Yup.string()
        .max(100, 'Description is Too Long!'),
});

export default function AddTax(props) {
    const initialData = {
        type: 'tax'
    }
    const [data, setdata] = React.useState(initialData);
    const [errors, setErrors] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({ open: false, });

    const onFormSubmit = async (e) => {
        e.preventDefault();

        let err = await Validation(ValidationSchema, data, )
        if (err.isValid === false) {
            console.log(err.isValid)
            setSnackbar({ ...snackbar, open: true, variant: 'error', message: 'Error Adding Tax' });
            setErrors(err.errors);
        } else {
            console.log(err.isValid)
            axios.post(`http://localhost:4000/tax`, { data })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setSnackbar({ ...snackbar, open: true, variant: 'success', message: 'Tax Added Successfully' });
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
                data={data}
                handleChange={onChangeValue}
                inputValues={data}
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
