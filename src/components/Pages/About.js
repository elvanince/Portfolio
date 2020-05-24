import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import TimeLine from '../Common/Timeline';
import Team from '../Common/Team';

class About extends Component {

    render() {
        return (

            <div>
                <Header
                    title="About Us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
                />
              <TimeLine/>
              <Team/>

            </div>

        )
    }

}

export default About;