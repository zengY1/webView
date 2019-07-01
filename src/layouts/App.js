import React, { Component } from 'react'
import styles from './app.less'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.wrappMain}> 
                {this.props.children}
            </div>
        )
    }
}
export default App