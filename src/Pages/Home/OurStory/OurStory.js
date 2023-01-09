import React from 'react';
import ourStoryBg from "../../../Assets/img/OurStoryBg.jpg"
const OurStory = () => {
    return (
        <section style={{
            background: `url(${ourStoryBg})`,
            height: "300px",
            margin: "100px 0px",
            backgroundSize: "cover"
        }}>
            <div className='grid justify-center  p-10'>
                <div>
                    <h1 className="text-4xl font-bold text-white text-center">Our Story</h1>
                </div>
                <div className='text-center text-white mx-96 mt-10'>
                    <p>Clothing Spark was founded in 2021 with the goal of reaching new heights in fashion and design. Our mission is to resale clothing that is symbolic traditions. We are trying to provide best cloth service in around bangladesh. These looks have a cultural reference to traditional clothing worn in Bangladesh.</p>
                </div>
            </div>
        </section>
    );
};
export default OurStory;