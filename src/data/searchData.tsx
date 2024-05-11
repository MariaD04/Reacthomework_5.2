import image from '../assets/yandex.png'
export const searchCategoriesList: ISearchCategoryListItem[] = [
    { category: 'Видео' },
    { category: 'Картинки' },
    { category: 'Новости' },
    { category: 'Карты' }
]

export const searchData: ISearch = {categoryList: searchCategoriesList, src: image, label: 'Найдётся всё', btn: 'Найти'}