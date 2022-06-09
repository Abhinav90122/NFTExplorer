import React from 'react';
import AccountContext from './AccountContext';

const AccountProvider = (props) => {
  const [address, setAddress] = React.useState(null);
  return (
    <AccountContext.Provider value={{ address, setAddress }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
