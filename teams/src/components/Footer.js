import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copyright: '© GlassCharlie',
          };
    }

    render() {
        return (
            <>
           <p>{this.state.copyright}</p>
           </>
        )
    }
}
export default Footer;