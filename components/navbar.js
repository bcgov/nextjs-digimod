
function NavBar() {

  return (
    <>
      <header id="navheader" className="navHeader">
        <div className="horizontalAlignment navBar container">
          <div className="row middle-xs">
            <div className="col-xs-11">
              <div className="navBanner">
                <a href="/" alt="Go to the Digital.gov.bc.ca home page." className="navBarHeaderLink">
                  <p className="navTitle">
                    <img id="bclogo" src="/BCID_H_rgb_rev.svg" alt="Go to the Government of British Columbia website" className="navImage"/>
                    Digital Government</p>
                </a>
                {/* <a className="skipToMainContent" href="#main-content-anchor" aria-label="Skip to main content">Skip to main content</a> */}
              </div>
            </div>
            <div className="col-xs-1">
              <div href="." className="navButton">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
