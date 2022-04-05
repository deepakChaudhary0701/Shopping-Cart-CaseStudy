
import classes from './error.module.css';

const Error = (props) => {
    return <span className={ classes['error-text']}>{ props.message }</span>
};

export default Error;