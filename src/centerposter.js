import logo from './Image/image 1.jpg';
import logo1 from './Image/image3.jpg';

import "./centerposter.css";


 
   // Assuming you will style this in a separate CSS file

const Center = () => {
    return (
        <>
        <div className="banner-container">
            <div className="banner-content">
                <img src={logo} alt="SPAR India Logo"/>
            </div>
          
        </div>

<div className="banner-container1">
<div className="banner-content1">
    <img src={logo1} alt="SPAR India Logo1"/>
</div>

</div>
</>
    );
};



export default Center;