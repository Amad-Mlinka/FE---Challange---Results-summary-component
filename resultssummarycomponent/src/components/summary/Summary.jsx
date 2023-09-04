/*React imports */
/*Custom imports */
import SummaryMain from './summaryMain/SummaryMain'
import SummaryResults from './summaryResults/SummaryResults'

/*CSS imports */
import classes from './Summary.module.scss'

/*Assets imports */

const average = (data) => {
    let sum = 0;
    let count = data.length;

    data.forEach(item => {
        sum=sum+item.score
    });

    return sum/count;
}

const Summary = (props) => {
    const data = props.data;   
    console.log(data) 
    const averageScore = Math.floor(average(data));
    
    return(
    <div className={classes.summary}>
        <SummaryMain average = {averageScore}/>
        <SummaryResults values = {data}/>
    </div>
        
    )
}


export default Summary