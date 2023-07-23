import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const singleCardData = useLoaderData();
    console.log(singleCardData)

    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus mollitia animi tempora voluptate ratione reiciendis velit labore, ex, distinctio nisi. Eligendi quod cumque quae adipisci? Repellat exercitationem sapiente rem!
        </div>
    );
};

export default CardDetails;