import '../rms_components/css_Menubar.css';
import rms from '../rms_components/icons/rms.png';
import menu_feed from '../rms_components/icons/menu_feed.png';
import menu_search from '../rms_components/icons/menu_search.png';
import menu_upload from '../rms_components/icons/menu_upload.png';
import menu_notifications from '../rms_components/icons/menu_notifications.png';
import menu_light_theme from '../rms_components/icons/menu_light_theme.png';
import menu_dark_theme from '../rms_components/icons/menu_dark_theme.png';
import menu_settings from '../rms_components/icons/menu_settings.png';

function Menubar(props) {
    let theme_icon;
    if(props.lightTheme==="1"){
        theme_icon=menu_light_theme;
    }else{
        theme_icon=menu_dark_theme;
    }


    return (
        <div className="menubar"> 

            <div class="rms_title">
                <img src={rms} alt="RMS Logo" />
                <div class="rms_logo">                                          
                    <div>Resource</div>
                    <div>Management</div>
                    <div>System</div>
                </div>
            </div> 
            <div class="menuoptions">
                <div class="option">
                    <img src={menu_feed} alt="icon" />
                    Feed
                </div>
                <div class="option">
                    <img src={menu_search} alt="icon" />
                    Search
                </div>
                <div class="option">
                    <img src={menu_upload} alt="icon" />
                    Upload
                </div>
                <div class="option">
                    <img src={menu_notifications} alt="icon" />
                    Notification
                </div>
                <div class="option">
                    <img src={menu_settings}  id="theme" alt="icon" />  
                    Settings               
                </div>
                <div class="option">
                    <img src={theme_icon}  id="settings" alt="icon" />  
                    Theme                 
                </div>
            </div>            
        </div>
    );
  }
  
  export default Menubar;