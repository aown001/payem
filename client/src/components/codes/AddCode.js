import React from 'react';
import FormSection from '../widgets/FormSection';
import * as Yup from 'yup';
import Validation from '../validation/Validation';
import axios from 'axios';
import Snackbar from '../widgets/Snackbar';

const Fields = [
    { type: 'TextField', label: 'Name', name: 'val' },
    { type: 'TextArea', label: 'Description', name: 'ATTRIB_01' },
    { type: 'TextField', label: 'Code', name: 'ATTRIB_05' },
    { type: 'Checkbox', label: 'Taxable', name: 'FLG_01', checked: false },
    {
        type: 'Checkbox', label: 'Active', name: 'FLG_02', checked: false
    },
]

const Sections = [
    {
        heading: 'Code Details',
        data: Fields
    },
]

const ValidationSchema = Yup.object().shape({
    val: Yup.string()
        .max(30, 'Name is Too Long!')
        .required('Name is Required'),
    ATTRIB_01: Yup.string()
        .max(100, 'Description is Too Long!'),
    ATTRIB_05: Yup.string()
        .max(30, 'Code is Too Long!'),
});

export default function AddCode() {
    const initialData = {
        type: 'money code'
    }
    const [data, setdata] = React.useState(initialData);
    const [errors, setErrors] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({ open: false, });

    const onFormSubmit = async (e) => {
        e.preventDefault();

        let err = await Validation(ValidationSchema, data, )
        if (err.isValid === false) {
            console.log(err.isValid)
            setSnackbar({ ...snackbar, open: true, variant: 'error', message: 'Error Adding Code' });
            setErrors(err.errors);
        } else {
            console.log(err.isValid)
            axios.post(`http://localhost:4000/codes`, { data })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setSnackbar({ ...snackbar, open: true, variant: 'success', message: 'Code Added Successfully' });
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
        var checked = e.target.checked
        if(checked==true){
            checked = 'Yes'
        }else{
            checked = 'No'
        }
        console.log(e.target.type)
        if(e.target.type=='checkbox'){
            value = checked
        }
        console.log(checked)
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