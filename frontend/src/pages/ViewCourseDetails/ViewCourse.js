import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewCourse = () => {

    const [Course, setCourseID] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/get/64609e0b04309d340e18198c');
                setCourseID(response.data);
            } catch (error) {
                setError(error.response.data.error);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <h2>Data Details</h2>
                    <p>ID: {Course.courseID}</p>
                </div>
            )}
        </div>
    )
}

export default ViewCourse