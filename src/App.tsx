import './App.css'
import NewsLists from './components/News/NewsLists'
import CurrencyList from './components/News/CurrencyList'
import Advertising from './components/News/Advertising'
import Search from './components/Search/Search'
import Widget from './components/Widgets/Widget'
import WeaterWidget from './components/Widgets/WeaterWidget'
import TVProgramWidget from './components/Widgets/TVProgramWidget'
import EtherWidget from './components/Widgets/EtherWidget'
import VisitedWidget from './components/Widgets/VisitedWidget'
import GermanyMapWidget from './components/Widgets/GermanyMapWidget'

import { categoriesList } from './data/categoriesList'
import { newsList } from './data/newsList'
import { currenciesList } from './data/currenciesList'
import { advertising } from './data/advertasing'
import { searchData } from './data/searchData'
import { weather } from './data/weatherWidget'
import { tvProgram } from './data/tvProgramWidget'
import { ether } from './data/etherWidget'
import { visited } from './data/visitedWidget'
import { germanyMap } from './data/germanyMap'
import { advertisingBanner } from './data/advertaising-banner'

function App() {

  return (
    <div className='main-page'>
      <header>
        <NewsLists categoryList={categoriesList} newsList={newsList} />
        <CurrencyList currencyList={currenciesList} />
        <Advertising src={advertising.src} alt={advertising.alt} text={advertising.text}/>
      </header>
      <main>
        <Search categoryList={searchData.categoryList} src={searchData.src} label={searchData.label} btn={searchData.btn} />
        <Advertising src={advertisingBanner.src} alt={advertisingBanner.alt} text={advertisingBanner.text} />
        <div className='widgets-container'> 
          <Widget title='Погода'>
            <WeaterWidget
              averageTemperature={weather.averageTemperature}
              morningTemperature={weather.morningTemperature}
              dayTemperature={weather.dayTemperature}
            />
          </Widget>
          <Widget title='ТВ-Программа'>
            <TVProgramWidget  items={tvProgram} />
          </Widget>
          <Widget title='Эфир'>
            <EtherWidget items={ether} />
          </Widget>
          <Widget title='Посещаемое'>
            <VisitedWidget items={visited} />
          </Widget>
          <Widget title='Карта Германии'>
            <GermanyMapWidget  text={germanyMap.text}/>
          </Widget>
        </div>
      </main>
    </div>
  )
}

export default App
