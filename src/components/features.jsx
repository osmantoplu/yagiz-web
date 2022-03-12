import MovingComponent from 'react-moving-text'
export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <MovingComponent
          type="bounce"
          duration="700ms"
          delay="1s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h2>Neden Blockchain?</h2>
        </MovingComponent>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
