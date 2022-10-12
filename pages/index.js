import Article from "../components/Article";
import Meta from "../components/Meta";

const index = ({ articles }) => {
  // console.log(articles);

  return (
    <div>
      <Meta />
      <h2>BLOG</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default index;

// Exécuter le code côté serveur
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=60"
  );
  const articles = await res.json();

  // console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
