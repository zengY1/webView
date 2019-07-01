import React, { Component } from 'react'
import styles from './header.less'
class Header extends Component {
    componentWillMount(){
        const obj=document.getElementsByClassName('images')
        
    }
    render() {
        const { HeaderData } = this.props
        
        return (
            <div className={styles.images}>
                <div className={styles.taps}>
                    <div className={styles.main}>
                        <div className={styles.left}>
                            <span>{HeaderData.clientLabel}</span>
                            <div className={styles.client}>{HeaderData.clientNumber}<span className={styles.label}>{HeaderData.clientUnit}</span></div>
                        </div>
                        <div className={styles.right}>
                            <span>{HeaderData.visitLabel}</span>
                            <div className={styles.client}>{HeaderData.visitNumber}<span className={styles.label}>{HeaderData.visitUnit}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header