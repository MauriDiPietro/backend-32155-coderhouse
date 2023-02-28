import { getAllNews, getNew, createNew } from "../../services/rest/news.services.js";

export async function getAllNewsCtr() {
    const allNews = await getAllNews();
    return allNews;
}

export async function getNewCtr(args) {
    const { id } = args;
    const news = await getNew(id);
    return news
}

export async function createNewCtr({data}) {
    const newObj = { ...data }
    const newNews = await createNew(newObj);
    return newNews
}




