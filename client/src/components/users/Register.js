import React from 'react';
import FormSection from '../widgets/FormSection';

const Fields = [
    { type: 'TextField', label: 'First Name', name: 'fst_name' },
    { type: 'TextField', label: 'Last Name', name: 'lst_name' },
    { type: 'TextField', label: 'Email', name: 'email' },
    {
        type: 'Select', label: 'Gender', options: [{ label: 'Male', value: 'm' },
        { label: 'Female', value: 'f' },
        ], 
        name: 'gender'
    },
    { type: 'Date', label: 'Date of Birth', name: 'dob' },
    { type: 'Empty', name: 'empty' },
    { type: 'TextField', label: 'Password', name: 'pass' },
    { type: 'TextField', label: 'Confirm Password', name: 'pass' },
]

const Sections = [
    {
        heading: 'User Credentials',
        data: Fields
    },
]

export default function AddEmployee() {
    
    const [data, setdata] = React.useState({

    });

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
                    inputValues={data}
                />
            </div>
        )
}