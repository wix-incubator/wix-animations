import React, { useEffect, useState } from 'react';
import counter from '../..';

export default () => {
  const [count, setCount] = useState(counter.getCount());

  useEffect(() => {
    const interval = setInterval(() => {
      counter.increment();
      setCount(counter.getCount());
    }, 500);

    return () => clearInterval(interval);
  });

  return <h1>Counter:{count}</h1>;
};
