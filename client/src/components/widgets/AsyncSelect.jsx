import React from 'react'
import axios from 'axios'
import Select, { components } from 'react-select'
import { getCellValue } from '../../helpers/utils';
import FormHelperText from '@material-ui/core/FormHelperText'

const { ValueContainer, Placeholder, Option } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, child => {
        return child && child.type !== Placeholder ? child : null;
      })}
    </ValueContainer>
  );
};

const CustomOption = ({...props}, onChange) => {
    const { data } = props
    console.log(data, `${data.label}  ${data.subLabel}  ${data.desc}`)
    return (
        <div>
            <Option {...props}>
                <p style={{ padding: '5px 0px', margin: 0, fontWeight: 400, fontSize: '0.8em' }}>{ data.label }</p>
                {data.subLabel && <p style={{ padding: '5px 0px', margin: 0, fontWeight: 200, fontSize: '0.75em' }}>{ data.subLabel }</p>}
                {data.desc && <p style={{ padding: '5px 0px', margin: 0, color: 'gray', fontSize: '0.7em', fontStyle: 'italic' }}>{ data.desc }</p>}
            </Option>
            {/* <hr style={{ width: '90%', margin: '0px auto', }}/> */}
        </div>
    );
  };

let objectCompare = (query, prevQuery) => {
    for (let key in query) {
        if(query[key] !== prevQuery[key]){
            return true
        }
    }

    return false
}

class AsyncSelect extends React.Component {
    state = {
        disabled: true,
        options: [],
        value: null,
        isLoading: false,
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.query)
            this.getOptions()
        else if(this.props.options){
            this.setState(prevState => ({
                options: this.props.options,
            }))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if (objectCompare(this.props.query, prevProps.query))
            this.getOptions()
    }

    handleChange = (obj) => {
        console.log("ASYNC HANDLECHANGE")
        let name = this.props.id
        this.props.handleSelectChange(name, obj)
    }

    getOptions = async () => {
        let response
        let selectMapping = this.props.mapping

        console.log("MAPPING: ", selectMapping)

        this.setState(prevState => ({
            isLoading: true,
        }))

        try {
            response = await axios({
                method: 'get',
                url: this.props.endpoint,
                params: this.props.query
            })

            console.log("RESSSSSP: ", response)

            let responseOptions = response.data.data.map(row => ({

                target: {
                    value: getCellValue(row, selectMapping[1]),
                    name: this.props.id,
                    row: row,
                    isAsyncSelect: true,
                    name2: this.props.name2
                },
                label: getCellValue(row, selectMapping[0]),
                subLabel: getCellValue(row, selectMapping[2]),
                desc: getCellValue(row, selectMapping[3]),
                value: getCellValue(row, selectMapping[1]),
            }))

            console.log("Resp Optionssss: ", responseOptions)
            console.log(response.status)

            if (response.status === 200) {
                this.setState(prevState => ({
                    options: responseOptions,
                    disabled: false,
                    isLoading: false,
                }))
            }
            else{
                this.setState(prevState => ({
                    isDisabled: true,
                    isLoading: false,
                }))
            }
        }
        catch (err) {
            this.setState(prevState => ({
                disabled: true,
                isLoading: false,
            }))
        }
    }

    getValue = (value) => {
        return typeof value === 'object' ? value : this.state.options.filter(ele => ele.value === value)
    }

    render() {
        let { options, isLoading } = this.state
        let { isDisabled, name, value } = this.props

        return (
            <div>
                <Select
                    options={[
                        {label: "None", value:null},
                        ...options
                    ]}
                    isDisabled={ isDisabled === false ? false : isDisabled === true? true : !isDisabled || isLoading }
                    isLoading={isLoading}
                    isClearable={false}
                    value={this.getValue(value)}
                    onChange={this.props.onChange}
                    components={{
                        ValueContainer: CustomValueContainer,
                        Option: CustomOption,
                    }}
                    menuPortalTarget={document.body}
                    menuPosition='fixed'
                    menuPlacement='bottom'
                    placeholder={name}
                    styles={{
                        // control: () => ({
                        //     width: '99%',
                        //     gridColumn: 'span 1',
                        // }),
                        container: (provided, state) => ({
                            ...provided,
                            marginTop: 25,
                            '@media (max-width: 960px)': {
                                gridColumn: '1 / -1',
                            }
                            // gridColumns: 1 / -1,
                        }),
                        menuPortal: base => ({
                            ...base,
                            height: 800,
                            zIndex: 9999
                        }),
                        valueContainer: (provided, state) => ({
                            ...provided,
                            overflow: "visible",
                        }),
                        placeholder: (provided, state) => ({
                            ...provided,
                            position: "absolute",
                            textTransform: 'capitalize',
                            top: state.hasValue || state.selectProps.inputValue ? -15 : "50%",
                            transition: "top 0.1s, font-size 0.1s",
                            fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
                        }),
                        groupHeading: (provided, state) => ({
                            ...provided,
                            background: 'lightgray',
                            fontSize: '1.25em',
                            textAlign: 'center',
                            color: 'white',
                        }),
                        option: (base) => ({
                            ...base,
                            borderTop: '1px solid lightgray',
                            borderBottom: '1px solid lightgray',
                        }),
                    }}
                />
                { this.props.helperText !== undefined && <FormHelperText error ><ul > {this.props.helperText.map((error)=>{ return <li>{error}</li>})}</ul></FormHelperText> }
            </div>
        )
    }
}

export default AsyncSelect