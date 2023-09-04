/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './SummaryMain.module.scss'
import ResultCircle from './resultCircle/ResultCircle'

/*Assets imports */

const SummaryMain = (props) => {
    return(
    <div className={classes.summaryMain}>
        <div className={classes.resultHeading}>
            Your Result
        </div>
        <div className={classes.resultImage}>
            <ResultCircle value={props.average} maxValue={100}/>
        </div>
        <div className={classes.resultText}>
            <div className={classes.resultWord}>
                Great
            </div>
            <div className={classes.resultExplanation}>
            Your performance exceed 65% of the people conducting the test here!
            </div>
        </div>
        
    </div>
        
    )
}


export default SummaryMain