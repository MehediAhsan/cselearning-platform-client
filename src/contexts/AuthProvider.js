import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({diplayName:'Mehedi'})

    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;