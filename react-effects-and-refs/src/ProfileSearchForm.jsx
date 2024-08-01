import React, { useState, useEffect } from 'react';

const ProfileSearchForm = ({ search }) => {
    const [term, setTerm] = useState("");

    const handleChange = e => {
        setTerm(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        search(term);
        setTerm("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input type="text" value={term} onChange={handleChange} />
                <button>Search</button>
            </form>    
        </div>
    );
};

export default ProfileSearchForm;