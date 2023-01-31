import './App.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import MediumArticle from "./MediumArticle";
import MediumSectionHeader from "./MediumSectionHeader";

function App() {
  const mediumYourArticles = yourArticles.map((article) => {
    return (
        <MediumArticle article={article} />
    );
});

const mediumMissedArticles = missedArticles.map((article) => {
    return (
        <MediumArticle article={article} />
    );
});


return (
<div>
    <MediumSectionHeader
    sectionTitle={"For you"}
    />
    <div>
    {mediumYourArticles}
    </div>
    <MediumSectionHeader
    sectionTitle={"In case you missed it"}
    />
     <div className="container-2">
    {mediumMissedArticles}
    </div>
    </div>
);
}

export default App;
