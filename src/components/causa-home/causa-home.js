import '../causa-home/causa-home.css';
import Banner from "./../../images/doacao.jpg";

function CausaHome() {

    return (
        <div class="content">
            <div class="boxDoacao">
                <div class="textDoacao">
                <div class="boxCentralTexto">
          
                    <div class="title-docao">
                    <p>The Seweetest Place In Town</p>
            
                    </div>
                        
                    <div class="sub-title-doacao">
                    <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum sapien erat. Sed a elit volutpat, porta libero pretium.
                    </p>

                    </div>
                    </div>
                </div>
                <div class="boximageDoacao">
                    <div class="boxBoderDoacao">
                        <div class="imgDoacao">
                            <img src={Banner}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )

}

export default CausaHome;