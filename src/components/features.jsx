
import LightSpeed from 'react-reveal/LightSpeed';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <LightSpeed left><h2>Neden Blockchain?</h2></LightSpeed>

        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <LightSpeed left><h3>{d.title}</h3></LightSpeed>
                  <LightSpeed left><p>{d.text}</p></LightSpeed>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
