import logo from './logo.svg';
import './App.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import MediumArticle from "./MediumArticle";
import MediumSectionHeader from "./MediumSectionHeader";

function App() {
  const mediumYourArticles = yourArticles.map((article) => {
    return (
        <MediumArticle article={article}  />
    );
});

const mediumMissedArticles = missedArticles.map((article) => {
    return (
        <MediumArticle article={article} />
    );
});


return (
  <div className="row">
    <MediumSectionHeader
    sectionTitle={"For you"}
    />
    {mediumYourArticles}
    <MediumSectionHeader
    sectionTitle={"In case you missed it"}
    />
    {mediumMissedArticles}

    </div>
);
}

export default App;
