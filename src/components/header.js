export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <div class="typewriter">
                <h1>Yagiz Bilisim</h1>
              </div>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Daha Fazla
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}