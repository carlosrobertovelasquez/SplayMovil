import React from 'react';
import Routes from './Routes';
const index = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    )
}

export default index
