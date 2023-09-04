/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './ResultCircle.module.scss'

/*Assets imports */

const ResultCircle = (props) => {
  return (
    <div className={classes.circle}>
        <div className={classes.mainValue}>{props.value}</div>
        <div className={classes.ofX}>of {props.maxValue}</div>
    </div>
  );
}

export default ResultCircle;
