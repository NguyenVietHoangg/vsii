import React from 'react';
import { useSelector } from 'react-redux';
const DefaultLayout: React.FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  return (
    <div>
      <h1>About Page</h1>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default DefaultLayout;
