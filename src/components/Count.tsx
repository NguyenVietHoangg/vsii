// @flow
import * as React from 'react';
type Props = {};
export function Count(props: Props) {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <div onClick={() => setCount(count + 1)}>+</div>
      <div onClick={() => setCount(count - 1)}>-</div>
    </div>
  );
}
