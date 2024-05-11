import { FC } from "react"
import CurrencyListItem from "./CurrencyListItem"
// компонент, который отображает все курсы валют
export const CurrencyList: FC<ICurrencyList> = ({ currencyList }) => { 
    return (  
        <div className="currency-container">
            <ul className="currency-list"> 
                { currencyList.map((item) => (<CurrencyListItem key={item.currency} {...item}/>)) } 
            </ul> 
        </div>
    ) 
}

export default CurrencyList