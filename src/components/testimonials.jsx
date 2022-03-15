import Slider from 'react-animated-slider';
import React from 'react';
import './slider2.css';
import './slider.css';

const content = [
	{
	  title: "Blockchain1",
	  description:
		"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ",
	  image: "./img/blk.jpg"
	},
	{
	  title: "Blockchain2",
	  description:
		"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. ",
	  image: "./img/blk2.jpg"
	},
	{
	  title: "Blockchain3",
	  description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
	  image: "./img/blk3.jpg"
	},
	{
		title: "Blockchain4",
		description:
		  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
		image: "./img/b6.png"
	  }
  ];
export const Testimonials = (props) => {
  return (
      <div id='testimonials'>
          <div className='overlay'>
          <div className='section-title text-center'>
            <h1>Galeri</h1>
            <br></br>
        <Slider autoplay={2000}>
        {content.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center` }}
          >
          <div className="center">
          <h1>{item.title}</h1>
          <p>{item.description}</p>

          </div>
      
        </div>
                ))}
        </Slider>
            </div>
            </div>
</div>

  )
}
