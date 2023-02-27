import React, { useEffect, useState } from 'react';
import Card from './Cards/Card';
import './Service.css'

const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://project-x-server-nine.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])


    return (
        <section className='service-section'>
            <div className='container'>

                <div className='section-heading'>
                    <h3 className='section-title'>We are Offering Best Features</h3>
                    <p className='section-text'>
                        BlueLight Health Envisions a World Where Living a Healthy
                        Lifestyle Comes Naturally. You, as Part of BlueLight
                    </p>
                </div>

                <div className='service-cards'>
                    {
                        services.map(service => 
                        <Card
                            key={service.id}
                            service={service}
                        >
                        </Card>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Service;