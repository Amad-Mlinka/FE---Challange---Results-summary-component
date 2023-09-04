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
        <SummaryItem key ={index} category = {item.category} value ={item.score} icon = {item.icon} maxValue={100}/>

    ))
    return(
    <div className={classes.summaryResults}>
        <div className={classes.summaryResultsContainer}>  
            <div className={classes.summaryTitle}>
                Summary
            </div>
            <div className={classes.summaryItems}>
                {summaryItems}
            </div>
            <div className={classes.buttonContainer}>
                <Button text = {"Continue"}/>
            </div>
        </div>
    </div>
        
    )
}


export default SummaryResults