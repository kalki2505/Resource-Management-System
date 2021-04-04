import '../rms_components/css_Profile.css';
import AU1841139 from '../rms_components/user_profiles/AU1841139.png';
import profile_school from '../rms_components/icons/profile_school.png';
import profile_student from '../rms_components/icons/profile_student.png';
import profile_degree from '../rms_components/icons/profile_degree.png';

function Profile() {
    return (
        <div class="profile">      
            <img id="profile" src={AU1841139} alt="Profile" />              
            <div class="type">
                <img src={profile_student} alt="Profile" />   
                Student
            </div>
            <div class="name">
                <div>Khushi Shah</div>
                <div>AU1841139</div>                
            </div>
            <div class="school">
            <img src={profile_school} alt="Profile" />   
                School of Enginnering and Applied Science
            </div>
            <div class="degree">
                <img src={profile_degree} alt="Profile" />   
                Bachelor in Technology in Information and Communication Technology
            </div>
            Profile
        </div>
    );
  }
  
  export default Profile;