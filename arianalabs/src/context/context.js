import React from 'react';

const myContext = React.createContext({
    functionName : () => {},
    varName : Boolean,
})

export default myContext;