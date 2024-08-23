import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const authToken = localStorage.getItem('authToken');
                if (!authToken) {
                    throw new Error('User not authenticated');
                }

                const response = await axios.get(
                    'https://bvmwebsolutions.com/ghoombuddy_laravel/api/user-detail',
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                setUser(response.data);
            } catch (error) {
                setError('Failed to fetch user details. Please login again.');
                console.error('Fetch user details error:', error);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>User Details</h2>
                    <p>Email: {user.email}</p>
                    {/* Display other user details as needed */}
                </div>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
};

export default UserDetails;
