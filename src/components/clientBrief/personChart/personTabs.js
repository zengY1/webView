import React, { Component } from 'react'
import styles from './personTabs.less'
class PersonTabs extends Component {
    render() {
        const {tabData}=this.props
        return (
                <div className={styles.chart}>
                    <div className={styles.chartTitle}>
                        <div className={styles.img}><img alt="group" src={tabData.img} width='22' /></div>
                        <div className={styles.name}>{tabData.name}</div>
                    </div>
                </div>
        )
    }
}
export default PersonTabs