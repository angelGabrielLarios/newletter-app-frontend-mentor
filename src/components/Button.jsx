import PropTypes from 'prop-types'

export const Button = ({ children, type = "button", onClick = () => { } }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="text-white text-sm font-bold bg-DarkSlateGrey  rounded-lg p-4 w-full hover:bg-gradient-to-r from-Tomato to-orange-600 hover:shadow-Tomato hover:shadow-lg "
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    onClick: PropTypes.func
}

