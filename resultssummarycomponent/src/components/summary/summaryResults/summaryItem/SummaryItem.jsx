/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './SummaryItem.module.scss'
/*Assets imports */

const SummaryItem = (props) => {
    const summaryClass = `${classes.summaryItem} ${props.category.toLowerCase() === "reaction" ? classes.reaction : 
    props.category.toLowerCase() === "memory" ? classes.memory :
    props.category.toLowerCase() === "verbal" ? classes.verbal :
    classes.visual}`;
    return(
    <div className={summaryClass}>
       <div className={classes.left}>
            <div className={classes.icon}>
                <img src={props.icon} alt="" />
            </div>
            <div className={classes.category}>
                {props.category}
            </div>
       </div>
       <div className={classes.right}>
        <div className={classes.value}>{props.value}</div>
        <div className={classes.ofX}><span>/</span>{props.maxValue}</div>
       </div>
        
    </div>
        
    )
}


export default SummaryItem