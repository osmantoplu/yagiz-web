import React from "react";
import "../../styles/sliderstyle.scss";
import "../../styles/slider.scss";

export const Blog = (props) => {
  return (
    <div id='testimonials'>
      <div className='overlay'>
        <div className='section-title text-center'>
          <div>
            <h2>Blog</h2>
          </div>
          <div class='webinar-grid'>
            <a href='#testimonials' class='link-block'>
              <div class=''>
                <div class='webinar-image-container'>
                  <img src='./img/blk.jpg' alt=''></img>
                </div>
                <h1 class='dundas-blue-text-long'>Blockchain nedir?</h1>

                <div class='webinar-content-box'>
                  <p>
                    <span style={{ fontWeight: 900 }}>
                      {" "}
                      Blockchain'in tanımı:{" "}
                    </span>{" "}
                    Blockchain bir iş ağındaki işlemlerin kaydedilmesi ve
                    varlıkların takip edilmesi sürecini kolaylaştıran,
                    paylaşılan ve üzerinde değişiklik yapılamayan bir büyük
                    defterdir. Varlıklar somut (ev, araba, nakit, toprak) veya
                    soyut (fikri mülkiyet, patent, telif hakları, marka)
                    olabilir. Değerli hemen hemen her şey bir blockchain ağında
                    izlenebilir ve üzerinde işlem yapılabilir, bu da riski
                    azaltır ve işe dahil olan tüm maliyetlerin düşürülmesini
                    sağlar.
                    <br />
                    <br />
                    <span style={{ fontWeight: 900 }}>
                      Blockchain önemi:
                    </span>{" "}
                    İşler, bilgi üzerinden ilerler. Bilgi ne kadar hızlı ve
                    doğru bir şekilde alınırsa o kadar iyidir. Blockchain,
                    yalnızca izni olan ağ üyeleri tarafından erişilebilen ve
                    üzerinde değişiklik yapılamayan bir büyük defterde depolanan
                    anlık, paylaşılan ve tamamen şeffaf bilgiler sağladığı için
                    bilginin sunulması için idealdir. Bir blockchain ağı
                    siparişleri, ödemeleri, hesapları, üretimi ve çok daha
                    fazlasını takip edebilir. Üyeler, gerçeğin tek bir
                    görünümünü paylaştığından bir işlemin baştan sona tüm
                    ayrıntılarını görebilirsiniz; böylece yeni verimliliklerin
                    ve fırsatların yanı sıra daha fazla güvene sahip olursunuz.
                    .{" "}
                  </p>
                </div>
              </div>
            </a>
            <a href='#testimonials' class='link-block'>
              <div class=''>
                <div class='webinar-image-container'>
                  <img src='./img/ux-ui.jpg' alt=''></img>
                </div>
                <h1 class='dundas-blue-text-long'>UX ve UI nedir?</h1>

                <div class='webinar-content-box'>
                  <p>
                    <span style={{ fontWeight: 900 }}>
                      {" "}
                      UX :{" "} 
                    </span>{" "}
                    UX, kullanıcı deneyimi tasarımı yapmak anlamına gelir. Sitenin veya uygulamanın kullanıcılarının kullandıkları hizmet ile daha rahat bir şekilde etkileşime geçebilmeleri ile ilgilenir. Kullanıcının hizmeti kullanmaya başlaması, etkileşime girmesi, içerisindeki bileşenleri kullanabilmesi ve o hizmeti kullanma amacını rahatlıkla yerine getirebilmesi için önemlidir.
                    <br />
                    <br />
                    <span style={{ fontWeight: 900 }}>
                     UI :
                    </span>{" "}
                    UI, kullanıcı arayüzü anlamına gelmektedir ve kullanıcıların sitede rahatça dolaşması ve sitede daha uzun süre kalması site içeriklerine daha rahat ulaşması gibi deneyim odaklı iyileştirmeler amaçlanır. UI ne demek diye sorduğumuzda aklımıza ilk gelecek olan şey kısaca kullanıcı konforu odaklı görsel tasarımlardır.{" "}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
