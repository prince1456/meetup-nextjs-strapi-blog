import Image from "next/future/image";
import Link from "next/link";
import Api from '../service/api'
const IMAGE_URL2 = "https://picsum.photos/450/450";
const IMAGE_PROPS = {
  width: "420",
  height: "420",
};
export default function Home({ articles }) {
  return (
    <div className="px-8 pt-4">
      <section className="mb-[5vh]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
          <div className="not-prose">
            <span>{articles[0].attributes.published}</span>
            <h2 className="text-[40px] font-bold">
              {articles[0].attributes.title}
            </h2>
            <p className="text-xl">{articles[0].attributes.shortDescription}</p>
          </div>
          <div className="flex justify-center">
            <Image
              src={IMAGE_URL2}
              {...IMAGE_PROPS}
              priority
              alt={articles[0].attributes.title}
              sizes="100vw"
              style={{ height: "auto", with: "100%", borderRadius: 20 }}
            />
          </div>
        </div>
      </section>
      <section>
        <h2>Articles</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8  place-item-start justify-items-stretch">
          {articles.map(({ attributes, id }) => {
            return (
              <div key={id}>
                <Link href={`articles/${attributes.url}`}>
                  <a>
                    <Image
                      alt={attributes.title}
                      src={`http://localhost:1337${attributes.image.data.attributes.url}`}
                      width="200"
                      height="200"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </Link>
                <h4 className="line-clamp-2">{attributes.title}</h4>
                <p className="line-clamp-3">{attributes.shortDescription}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await Api.get(
    "/blogs?populate=image"
  );
  return {
    props: {
      articles: data.data,
    },
  };
}
