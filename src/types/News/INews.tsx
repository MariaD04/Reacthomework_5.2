interface INewsListItem {
    src: string;
    text: string;
}

interface ICategoryListItem {
    category: string;
}

interface INews {
    categoryList: ICategoryListItem[];
    newsList: INewsListItem[];
}