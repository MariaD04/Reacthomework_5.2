import {FC} from 'react'
// компонент, который отображает название категории
export const SearchCategoryListItem: FC<ISearchCategoryListItem> = ({category}) => {
  return (
    <li className='search-categories-list-item'>{category}</li>
  )
}

export default SearchCategoryListItem