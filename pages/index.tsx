import styles from '../styles/Home.module.css'
import Page from './page'

const appCSS=`header {
  background-color: #036;
  border-bottom: 2px solid #fcba19;
  padding: 0 65px 0 65px;
  color: #fff;
  display: flex;
  height: 65px;
  top: 0px;
  width: 100%;
}

header h1 {
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-weight: normal;  /* 400 */
  margin: 5px 5px 0 18px;
  visibility: hidden;
}

header .banner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 0;
  /* border-style: dotted;
  border-width: 1px;
  border-color: lightgrey; */
}

header .other {
  display: flex;
  flex-grow: 1;
  /* border-style: dotted;
  border-width: 1px;
  border-color: lightgrey; */
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}

#bclogo {
  width: 300px;
}

/*
  These are sample media queries only. Media queries are quite subjective
  but, in general, should be made for the three different classes of screen
  size: phone, tablet, full.
*/

@media screen and (min-width: 600px) and (max-width: 899px) {
  header h1 {
    font-size: calc(7px + 2.2vw);
    visibility: visible;
  }
}

@media screen and (min-width: 900px) {
  header h1 {
    font-size: 2.0em;
    visibility: visible;
  }
}

/* nav */
.submenu {
  background-color: rgb(56, 89, 138);
  box-shadow: rgb(179 177 179) 0px 6px 8px -4px;
  color: rgb(252, 186, 25);
  min-height: 40px;
  width: 100%;
}

.submenu ul {
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0px;
  padding-left: 0px;
  padding-top: 8px;
}

.submenu ul li a {
  color: rgb(255, 255, 255);
  display: flex;
  font-size: 16px;
  font-weight: normal;
  padding: 0px 15px;
  text-decoration: none;
}

/* footer */
footer {
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif; 
  position: absolute;
  width: -webkit-fill-available;
}

footer .container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 46px;
}

footer ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  color: #fff;
  list-style: none;
  align-items: center;
  height: 100%;
}

footer ul li a {
  font-size: 0.813em;
  font-weight: normal;  /* 400 */
  color: #fff;
  border-right: 1px solid #4b5e7e;
  padding-left: 5px;
  padding-right: 5px;
}

a:hover {
  color: #fff;
  text-decoration: underline;
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}

.bannerTitle {
  color: rgb(49, 49, 50);
  font-size: 37px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: left;
}
.subTitle {
  color: rgb(49, 49, 50);
  font-size: 19px;
  text-align: left;
}

.col-md-6 {
  -webkit-flex-basis: 50%;
  flex-basis: 50%;
  max-width: 50%;
}
`

export default function Home({ data }: any) {
  console.log("this is " + data);
  return (
    <div className={styles.container}>
      <style>
        {appCSS}
      </style>
      <header>
        <div className="banner">
          <a href="https://gov.bc.ca">
            <img id="bclogo" src="/BCID_H_rgb_rev.svg" alt="Go to the Government of British Columbia website" />
          </a>
          <h1>Hello British Columbia</h1>
        </div>
        <div className="other">
          &nbsp;
        </div>
      </header>
      
      <div className="submenu">
        <ul>
        <li><a href=".">Home</a></li>
        </ul>
      </div>
      <h1>Welcome to Next.js!</h1>
<p>Here is the Wordpress page loaded in a Next.js App:</p>
      <Page data={data}/>
      <footer className="footer">
        <div className="container">
        <ul>
          <li><a href=".">Home</a></li>
          <li><a href=".">Disclaimer</a></li>
          <li><a href=".">Privacy</a></li>
          <li><a href=".">Accessibility</a></li>
          <li><a href=".">Copyright</a></li>
          <li><a href=".">Contact Us</a></li>
        </ul>
        </div>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://wordpress-c0cce6-dev.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages/67`)
  const content =  await res.json();
  const  data = content.content.rendered;
  console.log("data " + data);
  // Pass data to the page via props
  return { props: { data } }
}
