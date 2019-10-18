import React, { useEffect } from 'react';
import FormSection from '../widgets/FormSection';
import * as Yup from 'yup';
import Validation from '../validation/Validation';
import axios from 'axios';

export default function EmployeeContributionAdd() {
    const [data, setdata] = React.useState({ fetchedData: [] });

    const [errors, setErrors] = React.useState([]);
    let abc = []

    useEffect(() => {
        axios.get(`http://localhost:4000/contributions`)
            .then(res => {
                const fetchedData = res.data.data

                abc.push(fetchedData.map(data => {
                    console.log(data.val)
                    return { label: data.val, value: data.val }
                }))
                setdata({ ...data, fetchedData: abc })
            })
    }, []);

    const newContributionFields = [
        {
            type: 'Select', label: 'Contribution',
            options: abc,
            name: 'name'
        },
        // {
        //     type: 'Select', label: 'Method',
        //     options: [{ label: 'Option 1', value: '1' },
        //     { label: 'Option 2', value: '2' },
        //     ],
        //     name: 'ATTRIB_21'
        // },
        { type: 'TextField', label: 'Amount Limit', name: 'ATTRIB_11' },
        { type: 'TextField', label: 'Amount Per Pay', name: 'ATTRIB_12' },
        {
            type: 'Checkbox', label: '',
            options:
                [
                    { label: 'Active', value: '1' },
                ],
            name: 'FLG_01'
        }
    ]

    const Sections = [
        {
            heading: 'Contribution Details',
            data: newContributionFields
        }
    ]

    const ValidationSchema = Yup.object().shape({
        type: Yup.string()
            .required('Contribution is Required'),
        ATTRIB_11: Yup.string()
            .required('Amount Limit is Required')
            .max(30, 'Amount Limit Too Long!'),
    });

    const onFormSubmit = async (e) => {
        e.preventDefault();

        let err = await Validation(ValidationSchema, data, )
        if (err.isValid === false) {
            console.log(err.isValid)
            setErrors(err.errors);
        } else {
            console.log(err.isValid)
            axios.post(`http://localhost:4000/employees`, { data })
                .then(res => {
                    console.log(res.data);
                })
        }
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
        </div>
    )
}