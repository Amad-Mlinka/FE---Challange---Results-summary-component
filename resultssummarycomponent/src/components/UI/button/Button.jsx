/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './Button.module.scss'
/*Assets imports */

const Button = (props) => {
  
    return(
    <button className={classes.button}>
        {props.text}
    </button>
        
    )
}


export default Button