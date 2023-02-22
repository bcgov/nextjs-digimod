import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';
import { GetStaticPropsContext } from 'next/types';
import { Page } from '../../types/page';
import { PageContainer } from '../../components/pageContent'
import { StringToJSX } from '../../Utils/StringToJSX';

interface PageContainer {
  children?: JSX.Element|JSX.Element[];
}

function Pages({ pageItem }: any) {
  const pageCSS = `

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
    <PageContainer>
      <style>{pageCSS}</style>
      <StringToJSX domString={pageItem ? pageItem.content.rendered : '<div></div>'}></StringToJSX>
    </PageContainer>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps() {
//   const res = await fetch('https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages')
//   const content = await res.json()
//   const  data = content;
//   return {
//     props: {
//       data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }
const getSlug = (path: string) => path.replace(/^\/|\/$/g, '')

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
}: GetStaticPropsContext<{ pages: string[] }>) {
  console.log("getprops")
  const config = { locale, locales }
  // const pagesPromise = commerce.getAllPages({ config, preview })
  // const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  // const { pages } = await pagesPromise
  // const { categories } = await siteInfoPromise
  let offset: number = 0;
  let pages: any = [];
  let data: any = "[]";
  const path = params?.pages.join('/')
  while (data?.length > 0) {
    let url = "https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages?_fields=author,id,excerpt,title,content&per_page=100&offset=" + offset.toString();
    console.log(url);
    const res = await fetch(url);
    //console.log(res);
    data = await res.json()
    

    pages = pages.concat(data)
    offset += 100;
    //console.log(params);
    // const slug = locale ? `${locale}/${path}` : path
    // const pageItem = pages.find((p: Page) =>
    //   p.url ? getSlug(p.url) === slug : false
    // )
    // const data =
    //   pageItem &&
    //   (await commerce.getPage({
    //     variables: { id: pageItem.id! },
    //     config,
    //     preview,
    //   }))

    // const page = data?.page

    // if (!page) {
    //   return {
    //     notFound: true,
    //   }
    // }
    //console.log(path);
  }
  //console.log(pages);
  const pageItem = pages.find((p: any) => {
    //console.log(p.id);
    return p.id ? p.id == path : false
  }
  )
  console.log("# of pages: " + pages.length)

  //console.log(data);
  return {
    props: { pages, pageItem },
    revalidate: 60*5, // Every hour
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  console.log("getpaths")
  let offset: number = 0;
  let paths: any = [];
  let pages: any = "[{1}]";
  while (pages?.length > 0) {
    console.log(pages?.length > 0);
    const res = await fetch('https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages?_fields=author,id,excerpt,title,link,status&per_page=100&offset=' + offset.toString())
    // const { pages }: { pages: Page[] } = await res.json()
    pages = await res.json();
    console.log(pages.map((page: any) => page.status))

    // Get the paths we want to pre-render based on posts
    // paths = paths.concat(pages.map((page: { id: any; }) => ({ params: { pages: [page.id.toString()] } })));
    // var statuses = [
    //   { status: 'publish', assigned: true },
    //   { status: 'updating', assigned: false },
    //   { status: 'Three', assigned: true },
    // ];
      paths = paths.concat(pages.reduce(function (result: any[], page: { statuses: string; }) {
        if (page.statuses === 'publish') {
          return result.concat(page);
        }
        return result;
      }, []));
    offset += 100;
    // }

  }
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Pages