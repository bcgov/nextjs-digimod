const Page = ({ data }: any) => {
    console.log("hello");
    console.log(data);
    const pageCSS =`

    .page {
        background: rgb(242, 242, 242);
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
      h3 {
        margin: 40px 0 0;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        display: inline-block;
        margin: 0 10px;
      }
      a {
        color: #1a5a96;
      }
      
      a:hover {
        text-decoration: none;
        color: blue;
      }
      
      i.fa-external-link-alt {
        color: #1a5a96;
      }
      .col-md-6 {
        -webkit-flex-basis: 50%;
        flex-basis: 50%;
        max-width: 50%;
      }
      
      .row {
        margin: auto;
        display: flex;
        /* background: rgb(242, 242, 242); */
        max-width: 1065px;
        align-items: center;
      }
      
      .sideImage {
        background: rgb(242, 242, 242);
        display: block;
        max-width: 100%;
        max-height: 100%;
        padding-bottom: 20px;
        padding-top: 20px;
      }`;
    return (
        <div>
            <style>{pageCSS}</style>
          <div dangerouslySetInnerHTML={{__html: data}}></div>
        </div>
    );
}
export default Page;