import '../rms_components/css_Dashboard.css';
import Menubar from '../rms_components/Menubar';
import Profile from '../rms_components/Profile';
import Feed from '../rms_components/Feed';
import Upload from '../rms_components/Upload';

function Dashboard(props) {    
    const theme= {backgroundColor: props.lightTheme==="1" ?  "lightcyan": "black",
        color: props.lightTheme==="1" ? "black" : "lightcyan"};
    
    const menutheme= {backgroundColor: props.lightTheme==="1" ?  "darkblue": "black",
        color: props.lightTheme==="1" ?  "#4285F4" : "lightcyan"};

        
    return (
        <div className="dashboard" style={theme} >          
        
            <div class="row1"  style={menutheme} >
                <Menubar lightTheme={props.lightTheme}/>
            </div>
            
            <div class="row2">
                <div class="col1">
                    <Profile/>
                </div>
                <div class="col2">
                    
                    <Upload />
                </div>                                        
            </div>

      </div>
    );
  }
  
  export default Dashboard;