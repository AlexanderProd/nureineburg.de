import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '../../../utils/styles'
/* import { 
  Wrapper,
  OptionsLabel,
  OptionsWrapper,
  OptionInput,
  OptionLabel,
} from './styles' */

const VariantSelector = props => {
  const { option } = props
  return (
    <>
      <label htmlFor={option.name}>{option.name} </label>
      <Select
        name={option.name}
        key={option.id}
        onChange={props.onChange}
        value=''
      >
        <option disabled value="">
          {option.name} auswählen 
        </option>
        {option.values.map(value => {
          return (
            <option
              value={value}
              key={`${option.name}-${value}`}
            >{`${value}`}</option>
          )
        })}
      </Select>
    </>
  )
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default VariantSelector
