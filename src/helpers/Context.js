import React, { useState } from 'react';
export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <StateContext.Provider value={{ cartOpen, setCartOpen }}>
            {children}
        </StateContext.Provider>
    );
};
