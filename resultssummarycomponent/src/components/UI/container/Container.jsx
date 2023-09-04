/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './Container.module.scss'

/*Assets imports */

const Container = (props) => {
    return(
    <div className={classes.container}>
        {props.children}
    </div>
        
    )
}


export default Container