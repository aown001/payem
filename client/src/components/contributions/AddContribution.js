import React from 'react';
import FormSection from '../widgets/FormSection';
import * as Yup from 'yup';
import Validation from '../validation/Validation';
import axios from 'axios';
import Snackbar from '../widgets/Snackbar';

const ContributionFields = [
    { type: 'TextField', label: 'Name', name: 'val' },
    { type: 'TextArea', label: 'Description', name: 'ATTRIB_03' },
    {
        type: 'Select', label: 'Method',
        options:
            [
                { label: 'Fixed', value: 'fixed' },
                { label: 'Percentage of Net Pay', value: 'Percentage of Net Pay' },
                { label: 'Percentage of Gross Pay', value: 'Percentage of Gross Pay' },
            ],
        name: 'ATTRIB_06'
    },
    { type: 'TextField', label: 'limit Amount', name: 'ATTRIB_14' },
    {
        type: 'TextField', label: 'Amount Per Pay', name: 'ATTRIB_15', readOnly: (object) => {
            if (object['ATTRIB_06'] === 'fixed') {
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: 'TextField', label: 'Percent Per Pay', name: 'ATTRIB_15', readOnly: (object) => {
            if (object['ATTRIB_06'] === 'Percentage of Net Pay' || object['ATTRIB_06'] === 'Percentage of Gross Pay') {
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: 'Checkbox', label: 'Taxable', name: 'FLG_04', checked: false
    },
    {
        type: 'Select', label: 'Deduction', options: [{ label: 'Deduction 1', value: 'Deduction1' },
        { label: 'Deduction 2', value: 'deduction2' },
        ],
        name: 'ATTRIB_16'
    },
]

const Sections = [
    {
        heading: 'Contribution Details',
        data: ContributionFields
    },
]

const ValidationSchema = Yup.object().shape({
    val: Yup.string()
        .max(30, 'Name is Too Long!')
        .required('Name is Required'),
    ATTRIB_03: Yup.string()
        .max(50, 'Description is Too Long!'),
    ATTRIB_06: Yup.string()
        .required('Method is Required'),
    ATTRIB_14: Yup.number()
        .typeError('Limit Amount Must be a Number')
        .positive("Limit Amount Must be a Positive Number")
        .integer("Limit Amount Must be an Integer (No Decimals)"),
    ATTRIB_15: Yup.number()
        .typeError('Amount Per Pay Must be a Number')
        .positive("Amount Per Pay Must be a Positive Number")
        .integer("Amount Per Pay Must be an Integer (No Decimals)")
        .lessThan(Yup.ref('ATTRIB_14'), "Amount Per Pay should be less than Limit Amount"),
});

export default function AddContribution() {
    const initialData = {
        type: 'contribution'
    }
    const [data, setdata] = React.useState(initialData);
    const [errors, setErrors] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({ open: false, });

    const onFormSubmit = async (e) => {
        //e.preventDefault();
        let err = await Validation(ValidationSchema, data, )
        if (err.isValid === false) {
            console.log(err.isValid)
            setSnackbar({ ...snackbar, open: true, variant: 'error', message: 'Error Adding Contribution' });
            setErrors(err.errors);
        } else {
            console.log(err.isValid)
            axios.post(`http://localhost:4000/contributions`, { data })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setSnackbar({ ...snackbar, open: true, variant: 'success', message: 'Contribution Added Successfully' });
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