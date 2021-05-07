import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Page from "./components/page/Page";
import "./App.scss";
import { callNewsApi } from "./apis/NewsApi";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import SearchBar from "./components/searchBar/SearchBar";
import LatestNews from "./components/latestNews/LatestNews";
import BreakingNews from "./components/breakingNews/BreakingNews";
import ExtraBar from "./components/extraBar/ExtraBar";
import { isDesktop, isMobile } from "react-device-detect";
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {
  // U Article.d.ts pospremljen interface što sve API vraća i koje vrijednosti
  // U callNewsApi pospremljen url + ključ koji nam treba za dohvaćanje adrese.
  const [ articles, setArticles ] = useState<Models.Article[]>([]);
  useEffect(() => {
    async function getArticles() {
      const response = await callNewsApi();
      setArticles(response.articles);
    }
    getArticles();
  }, []);

  //potrebno za mobilnu verziju stranice
  const [ isViewingLatestNews, setLatestNews ] = useState(false);
  const [ search, setSearch ] = useState('');

  //console.log(articles)
  return (
    <>
      {isDesktop && <ExtraBar title1={"Make MyNews your homepage"} title2={"Every day discover what's trending on the internet!"}  txt1={"No, thanks"}/>}
      <Page
        header={
          <>
            <Header />
            {isDesktop && <SearchBar onClick={setSearch} />}
          </>
        }
        menu={isDesktop ? 
          <Menu /> 
        : 
          <MobileMenu>
            <Header />
            <SearchBar onClick={setSearch} />
          </MobileMenu>
        }
        content={
          <>
            {isMobile ? (
              <>
                <SearchBar onClick={setSearch}/>
                <div className='center'>
                  <button
                    className={!isViewingLatestNews ? "active" : ""}
                    onClick={() => setLatestNews(false)}
                    children="Featured"
                  />
                  <button
                    className={isViewingLatestNews ? "active" : ""}
                    onClick={() => setLatestNews(true)}
                    children="Latest"
                  />
                </div>
              </>
            ) : (
              <h1>News</h1>
            )}
            <Collection>
              {(isDesktop || !isViewingLatestNews) &&
                articles.filter(article => !search || article.title.toLowerCase().indexOf(search.toLowerCase()) >= 0).map((article, index) => (
                  <Card
                    key={index}
                    category={article.source?.name}
                    title={article.title}
                    description={article.author}
                    img={article.urlToImage}
                  />
                ))}
              {(isDesktop || isViewingLatestNews) &&
                <LatestNews
                  data={articles}
                />
              }
              {isDesktop &&
                <BreakingNews
                  title={"Peace On Earth A Wonderful Wish But No Way"}
                  author={"Bertie Campbell"}
                />
              }
            </Collection>
          </>
        }
      />
    </>
  );
}

export default App;
