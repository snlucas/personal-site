import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-10-10T04:45:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

export const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'países',
  //   label: 'países visitados',
  //   value: 53,
  //   link:
  //     'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'localidade',
    label: 'Current country',
    value: 'Brazil',
  },
  {
    key: 'localidade',
    label: 'Current city',
    value: 'São Leopoldo, RS',
  },
];

export const dataBr = [
  {
    key: 'idade',
    label: 'Idade atual',
    value: <Age />,
  },
  // {
  //   key: 'países',
  //   label: 'países visitados',
  //   value: 53,
  //   link:
  //     'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'localidade',
    label: 'País atual',
    value: 'Brasil',
  },
  {
    key: 'localidade',
    label: 'Cidade atual',
    value: 'São Leopoldo, RS',
  },
];

export default { data, dataBr };
