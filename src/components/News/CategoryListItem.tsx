import {FC} from 'react'
// компонент, который отображает название категории
export const CategoryListItem: FC<ICategoryListItem> = ({category}) => {
  return (
    <li className='news-menu-list-item'>{category}</li>
  )
}

export default CategoryListItem