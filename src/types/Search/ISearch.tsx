interface ISearch extends ISearchForm {
    categoryList: ISearchCategoryListItem[];
}

interface ISearchCategoryListItem {
    category: string;
}

interface ISearchForm {
    src: string;
    label: string;
    btn: string;
}