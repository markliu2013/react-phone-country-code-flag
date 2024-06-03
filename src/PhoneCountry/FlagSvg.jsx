import React, { useEffect, useState } from 'react';

const FlagSvg = ({ code }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const svgUrl = await import(`./flags/${code}.svg?raw`);
      //  const response = await fetch(svgUrl.default);
      // const content = await response.text();
      setData(svgUrl.default);
    };
    fetchData().catch(console.error);
  }, [code]);

  return (
    <div className="phone-country-select-list-flag" dangerouslySetInnerHTML={{ __html: data }} />
  );
};

export default FlagSvg;
