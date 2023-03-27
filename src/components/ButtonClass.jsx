import React, {Component} from 'react';

class ButtonClass extends Component {

    
    render() {
        const {text} = this.props;
        return <button>{text}</button>
    }
}

ButtonClass.defaultProps = {
    text: "ini defalt"
}

export default ButtonClass; 