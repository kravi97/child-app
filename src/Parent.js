import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

    const handleFormSubmit = (formData) => {
        setSubmittedData(formData);
    }

    return (
        <>
            <Child onFormSubmit={handleFormSubmit} />
            {submittedData.name && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name:{submittedData.name}</p>
                    <p>email:{submittedData.email}</p>
                </div>
            )}
        </>
    )
}

export default Parent
