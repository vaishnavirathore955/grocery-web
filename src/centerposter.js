import logo from './Image/image 1.jpg';
import logo1 from './Image/image3.jpg';
import "./centerposter.css";

const Center = () => {
    return (
        <>
            <div className="banner-container">
                <div className="banner-content">
                    <img className='img-fluid' src={logo} alt="SPAR India Logo"/>
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
