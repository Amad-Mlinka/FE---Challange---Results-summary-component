/*React imports */
/*Custom imports */
import SummaryItem from './summaryItem/SummaryItem'
import Button from '../../UI/button/Button'
/*CSS imports */
import classes from './SummaryResults.module.scss'

/*Assets imports */

const SummaryResults = (props) => {
    console.log(props.values)
    const summaryItems = props.values.map((item,index) => ( 
        <SummaryItem key ={index} categore = {item.category} value ={item.value} icon = {item.icon}/>

    ))
    return(
    <div className={classes.summaryResults}>
        <div className={classes.summaryTitle}>
            Summary
        </div>
        <div className="summaryItems">
            {summaryItems}
        </div>
        <Button text = {"Continue"}/>

    </div>
        
    )
}


export default SummaryResults