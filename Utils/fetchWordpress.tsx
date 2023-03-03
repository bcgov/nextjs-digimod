function Pages({ pages } : any) {
    return (
      <ul>
        {pages.map((page : any) => (
          <li key={page.id}>{page.title}</li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // revalidation is enabled and a new request comes in
  export async function getStaticProps() {
    const res = await fetch('https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages/656')
    const pages = await res.json()
  
    return {
      props: {
        pages,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }
  
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  export async function getStaticPaths() {
    const res = await fetch('https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages/656')
    const pages = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = pages.map((post : any) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }
  
  export default Pages