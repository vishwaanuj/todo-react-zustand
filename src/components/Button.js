import PropTypes from 'prop-types';


const Button = ({text,color,onClick}) => {
    return (
        <button className="default-button" style={{backgroundColor:color}} onClick={onClick} >
            {text}
        </button>
    )
}

Button.propTypes={
    onClick:PropTypes.func,
    text:PropTypes.string,
    color:PropTypes.string
}

export default Button
