import React, { Component } from 'react'

import logo from '../logo.svg'

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="" width="50" height="50" />
            </div>
        )
    }
}

export default Logo