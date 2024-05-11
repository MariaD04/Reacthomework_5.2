import { FC } from 'react'
import NewsListItem from './NewsListItem'
import CategoryListItem from './CategoryListItem'
// компонент, который отображает списки категорий и новостей
export const NewsLists: FC<INews> = ({categoryList, newsList}) => {
  return (
    <div className='news-container'>
      <nav className='news-menu'>
        <ul className='news-menu-list'> 
          { categoryList.map((category) => (<CategoryListItem key={category.category} {...category}/>)) } 
        </ul>  
      </nav>
      <div className='news-main'>
        <ul className='news-main-list'>
          { newsList.map((news) => (<NewsListItem key={news.text} {...news}/>)) }
        </ul>
      </div>
    </div>
  )
}

export default NewsLists
