import React, { useEffect, useState } from 'react'

const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = useState({
        title: '',
        content: [],
        imageUrl: '',

    })

    useEffect(() => {
        fetch('/about-us')
            .then(res => {
                console.log('Response:', res);
                return res.json();
            })
            .then(data => {
                console.log('Data:', data);
                setAboutUsData(data);
            })
            .catch(error => console.error('Error fetching About Us data:', error));
    }, []);


    return (
        <div>
            <h1> {aboutUsData.title}</h1>
            {aboutUsData.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src={aboutUsData.imageUrl}
                alt="About Us"
                style={{ maxWidth: '20%' }} />
        </div>
    )
}

export default AboutUs