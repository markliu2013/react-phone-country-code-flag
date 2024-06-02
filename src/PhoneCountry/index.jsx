import React from 'react';
import PhoneCountrySelect from './PhoneCountrySelect';
import './index.css';

const PhoneCountry = () => {
  return (
    <div className="phone-country-form-control">
      <label>
        <span className="phone-country-required-asterisk">*</span>Phone Number:{' '}
      </label>
      <div className="phone-country-form-control-input">
        <PhoneCountrySelect />
        <input
          className="phone-country-form-number-input"
          type="text"
          placeholder="Please type your phone number"
        />
      </div>
    </div>
  );
};

export default PhoneCountry;
