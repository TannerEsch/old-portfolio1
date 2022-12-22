import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';

import Languages from './Languages';
import Tools from "./Tools"
import Frameworks from "./Frameworks"
import Databases from './Databases';

function Skills() {
    return (
        <Tabs
            style={{ position: "absolute", backgroundColor:"black", fontFamily:"Chivo Mono", width: "175vh", left: "250px", top: "-8px" }}
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
            <Tab eventKey="home" title="Languages">
                <Languages />
            </Tab>
            <Tab eventKey="profile" title="Databases">
                <Databases />
            </Tab>
            <Tab eventKey="longer-tab" title="Frameworks">
                <Frameworks />
            </Tab>
            <Tab eventKey="contact" title="Tools">
                <Tools />
            </Tab>
        </Tabs>
    );
}

export default Skills;