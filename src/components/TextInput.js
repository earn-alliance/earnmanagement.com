/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const TextInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { name } = props;
  return (
    <div className='text-input-container'>
      <Controller
        render={({ field }) => (
          <input
            type={!showPassword ? 'password' : 'text'}
            {...props}
            {...field}
          />
        )}
        {...props}
      />
        {/* <When
          condition={name === 'password' || name === 'passwordConfirmation'}
        >
          {!showPassword ? (
            <PasswordClosedIcon
              className="password_icon"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          ) : (
            <PasswordShowIcon
              className="password_icon"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          )}
        </When> */}
    </div>
  );
};

export default TextInput;
