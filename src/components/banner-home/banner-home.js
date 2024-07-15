import '../banner-home/banner-home.css';
import Banner from "./../../images/banner-home.png";


function BannerHome() {

    return (
        <div class="banner">
                <img src={Banner}/>
                <div class="title">
                <p>The Seweetest Place In Town</p>
        
                </div>
                    
                <div class="sub-title">
                <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum sapien erat. Sed a elit volutpat, porta libero pretium.
                </p>

                </div>
              
        </div>
 
    )

}

export default BannerHome;