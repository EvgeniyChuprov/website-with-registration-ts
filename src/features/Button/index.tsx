import React from 'react';

import './style.scss';

interface IProps {
  name: string,
  method?: any;
}

const Button = (props: IProps) => {
  const { method, name } = props;
  return (
    <button
      type="submit"
      onClick={method}
      className="button"
    >
      {name}
    </button>
  );
};

export { Button };
