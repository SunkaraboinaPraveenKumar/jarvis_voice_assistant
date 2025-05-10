import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const apiURL = 'https://newsapi.org/v2/top-headlines';

async function getNews() {
    try{
        const response = await axios.get(apiURL,{
            params:{
                country:"us",
                apiKey: process.env.NEWS_API_KEY
            }
        })

        const articles = response.data.articles;

        const simplifiedArticles = articles.map((article)=>({
            title:article.title,
            description: article.description
        }));

        return simplifiedArticles;
    }
    catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

export default getNews;