import '../rms_components/css_Dashboard.css';
import Menubar from '../rms_components/Menubar';
import Profile from '../rms_components/Profile';

function Dashboard() {
    return (
      <div className="dashboard">          
          <div class="row1"><Menubar/></div>
          <div class="row2">
                <div class="col1">
                    <Profile/>
                </div>
                <div class="col2">
                    Menuoutput
                </div>                            
          </div>
      </div>
    );
  }
  
  export default Dashboard;