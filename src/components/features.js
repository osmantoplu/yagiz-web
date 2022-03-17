import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style/featurestyle.css';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
       
        <div class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 py-3">

          <Zoom left><h2 class="title-section">Profesyonel <span class="fg-primary"> <a href="#services">Hizmetler</a></span> İçin Yanınızdayız...</h2></Zoom>

          <Fade left><p>Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde köklü değişimler yaratıyor. Yeni nesil teknolojiler ile geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla birlikte bu avantajlar özelleştirme ve entegrasyon ihtiyaçlarının karşılanmasını gerektiriyor. </p></Fade>

          <Fade left><p>Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde köklü değişimler yaratıyor. Yeni nesil teknolojiler ile geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla birlikte bu avantajlar özelleştirme ve entegrasyon ihtiyaçlarının karşılanmasını gerektiriyor. </p></Fade>
            
          <Fade left><p>Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde köklü değişimler yaratıyor. Yeni nesil teknolojiler ile geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla birlikte bu avantajlar özelleştirme ve entegrasyon ihtiyaçlarının karşılanmasını gerektiriyor. </p></Fade>

            <a href="#services" class="btn btn-primary mt-4">Tüm Hizmetlere Göz Atın</a>
          </div>
          <div class="col-lg-6 py-3">
            <div class="about-img">
              <img src="./img/blk.jpg" width={"500px"} height={"500px"} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div> 
      </div>
    </div>
    </div>
  )
}
