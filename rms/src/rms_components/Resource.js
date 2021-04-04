import '../rms_components/css_Resource.css';
import AU1841029 from '../rms_components/user_profiles/AU1841029.png';


function Resource(props) {    
    
    const theme={backgroundColor: props.lightTheme==="1" ?  "lightcyan": "black",
        color: props.lightTheme==="1" ? "black" : "lightcyan"};    

    return (
        <div class="resource" >
            <div class="reso_header">
                <div>
                    <img src={AU1841029} class="user_profile" alt="user-profile" />                 
                </div>
                <div class="reso_detail">
                    <div class="reso_line1">
                        <div class="author_name">{props.name+" "}</div>
                        <div class="space"></div>
                        <div class="author_detail">
                            {"| "+props.year+" year "+props.degree+", "+props.school}
                        </div>
                    </div>
                    <div class="reso_line1">
                        <div class="author_detail">{"shares"}</div>
                        <div class="space"></div>
                        <div class="author_name">
                            {props.course+" "+props.type}
                        </div>                            
                    </div>                    
                </div>                
            </div>    
            <div>
                <hr class="reso_line"></hr>
            </div>       
            <div class="reso_about">
                {props.about}
            </div>                         
        </div>
    );
    
}
  
export default Resource;
