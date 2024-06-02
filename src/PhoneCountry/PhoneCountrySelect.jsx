import React, { useState, useEffect, useRef } from 'react';
import phoneCountryCode from './phone_country_code.json';

const PhoneCountrySelect = () => {
  const [isOpen, setIsOpen] = useState(false); // is drop-down-list open
  const [countryList, setCountryList] = useState([]); // the drop-down-list Country data
  const [countrySelected, setCountrySelected] = useState(); // current selected country
  const countrySelectedRef = useRef(null); // HTMLDivElement ref
  const countryDropdownRef = useRef(null); //  HTMLDivElement ref

  // init countryList base on phoneCountryCode json.
  useEffect(() => {
    const tempCountryList = [];
    phoneCountryCode.forEach((country) => {
      tempCountryList.push({
        countryCode: country['country_code'],
        code: `+${country['phone_code']}`,
        name: country['country_en'],
        visible: true // for search use
      });
    });
    setCountryList(tempCountryList);
    setCountrySelected(tempCountryList[0]); // the first country is default
  }, []);

  // click to select country
  function itemClickHandler(item) {
    setCountrySelected(item);
    setIsOpen(false);
  }

  // toggle dropdown
  function documentClickHandler(event) {
    const target = event.target;
    if (countryDropdownRef.current && countryDropdownRef.current.contains(target)) {
      return false;
    }
    if (countrySelectedRef.current && countrySelectedRef.current.contains(target)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', documentClickHandler);
    return () => {
      document.removeEventListener('click', documentClickHandler);
    };
  }, []);

  // search by code or name
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (countryList.length < 1) return; // countryList data must be loaded
    let newCountryList;
    if (searchText && searchText.length > 0) {
      newCountryList = countryList.map((country) => {
        if (
          country.name.toLowerCase().includes(searchText.toLowerCase()) ||
          country.code.toString().includes(searchText)
        ) {
          country.visible = true;
        } else {
          country.visible = false;
        }
        return country;
      });
    } else {
      newCountryList = countryList.map((country) => {
        country.visible = true;
        return country;
      });
    }
    setCountryList(newCountryList);
  }, [searchText]);

  return (
    <div className="phone-country-select-container">
      <div className="phone-country-select-selected" ref={countrySelectedRef}>
        {countrySelected && countrySelected.countryCode && (
          <>
            <img src={`flags/${countrySelected.countryCode}.svg`} />
            <span className="phone-country-select-selected-name">{countrySelected.name}</span>
            <span className="phone-country-select-selected-code">{countrySelected.code}</span>
          </>
        )}
      </div>
      <div
        className={'phone-country-select-dropdown ' + (isOpen ? 'open' : 'closed')}
        ref={countryDropdownRef}
      >
        <div className="phone-country-select-search">
          <input
            type="text"
            placeholder="Search by Name or Code"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src="clear.svg" onClick={() => setSearchText('')} />
        </div>
        <ul>
          {countryList.map((item, index) => (
            <li
              key={index}
              onClick={() => itemClickHandler(item)}
              className={item.visible ? 'show' : 'hide'}
            >
              <img
                className="phone-country-select-list-flag"
                src={`flags/${item.countryCode}.svg`}
              />
              <span className="phone-country-select-list-name">{item.name}</span>
              <span className="phone-country-select-list-code">{item.code}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhoneCountrySelect;
