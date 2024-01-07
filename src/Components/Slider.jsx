import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
export default function Slider (){
        return (
            <div>
            <Carousel 
                 showThumbs={false}
                 showStatus={false}
                 swipeable={true}
                 autoPlay={true}
                 infiniteLoop={true}
                
            >
                <div  className="slider">
                    <img src={image1} />
                </div>

                <div  className="slider">
                    <img src={image2} />
                </div>

                <div  className="slider">
                    <img src={image3} />
                </div>

                <div  className="slider">
                    <img src={image4} />
                </div>
                
                <div  className="slider">
                    <img src={image5} />
                </div>
            </Carousel>
            </div>
        );
    }

