/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [editItem, setEditItem] = useState(null);
    return (
        <EditContext.Provider value={{ editItem, setEditItem }}>
            {children}
        </EditContext.Provider>
    );
};
