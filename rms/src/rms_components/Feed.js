import React from "react";
import '../rms_components/css_Dashboard.css';
import feed_data from '../rms_components/feed_data.js';
import Resource from '../rms_components/Resource.js';

function Feed(props) {    
    const theme={backgroundColor: props.lightTheme==="1" ?  "lightcyan": "black",
        color: props.lightTheme==="1" ? "black" : "lightcyan"};
     
    const resources=feed_data.map(reso => 
            <Resource 
                key={reso.id} 
                profile={reso.profile}
                name={reso.name} 
                rollno={reso.rollno}
                degree={reso.degree}
                school={reso.school}
                year={reso.year}
                course={reso.course}
                type={reso.type}
                about={reso.about}
                lightTheme={props.lightTheme}
            />
        );

    return (
        <div style={theme} >          
            {resources}
        </div>
    );
    
}
  
 export default Feed;