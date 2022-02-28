import React from 'react'
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const Dropdown = (props) => (
  <div className="App">
    <Controller
      {...props}
      render={({ field }) => (
        <Select
          isMulti={props.multiSelect}
          placeholder={props.placeholder}
          // styles={style}
          {...field}
          options={props.data}
          className={props.className}
          isDisabled={props.isDisabled}
          value={props.value}
        />
      )}
    />
  </div>
);

export default Dropdown;