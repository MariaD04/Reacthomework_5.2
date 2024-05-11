import {FC} from 'react'
import SearchCategoryListItem from './SearchCategoryListItem'
// компонент, который отображает список категорий и поисковую строку
export const Search: FC<ISearch> = ({ categoryList, src, label, btn }) => {
  return (
    <div className='search-container'>
        <nav className='search-categories'>
            <ul className='search-categories-list'>
                { categoryList.map(category => (<SearchCategoryListItem key={category.category} {...category} />)) }
            </ul>
        </nav>
        <div className='search-line'>
            <img className='search-img' src={src} alt="" />
            <form action="">
                <label htmlFor="input">{label}</label>
                <input className='form-input' id='input' type="text" />
                <button className='form-button' type='submit'>{btn}</button>
            </form>
        </div>
    </div>
  )
}

export default Search
