import Axios from "axios";
import ReactMarkdown from "react-markdown";

function Articles({ article: { attributes} }) {
  console.log({attributes})
  return (
    <div>
      <img src={`http://localhost:1337${attributes.image.data.attributes.url}`}/>
      <h1> {attributes.title} </h1>
      <ReactMarkdown
        children={attributes.content} 
     />
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  try {
    const { data } = await Axios(
      `http://localhost:1337/api/blogs?populate=image&filters[url]=${[
        params.slug,
      ]}`
    );

    return {
      props: {
        article: data.data[0],
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log(error);
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default Articles;
