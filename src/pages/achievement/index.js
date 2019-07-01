import React, { Component } from 'react'
import { connect } from 'dva';
import { Tabs, } from 'antd-mobile'
import { Header, AchievementTable } from 'components'
import styles from './index.less'
const tabs = [
    { title: '个人' },
    { title: '部门' },
];
class Achievement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: { "deptRank": [] }
        }
    }
    handleTapChange = (tab, index) => {

    }
    handleTapClick = (tab, index) => {

    }
    render() {
        const { staffListData } = this.props.achievementModel
        const listData = staffListData ? staffListData : []
        const titleData = listData ? listData.title : ''
        const title = titleData ? titleData.split('业绩简报') : ''
        const content = listData ? listData.content : []
        const personDataSource = content ? content.personalRank : []
        const deptDataSource = content ? content.deptRank : []
        const saleAmount = content ? content.saleAmount : 0
        const saleRank = content ? content.saleRank : 0
        const HeaderData = {
            clientLabel: '我的业绩',
            clientNumber: saleAmount == null ? 0 : saleAmount,
            clientUnit: '元',
            visitLabel: '我的排名',
            visitNumber: saleRank == null ? 0 : saleRank,
            visitUnit: null
        }
        // 部门业绩排行 按amount的排序
        deptDataSource.sort(function (a, b) {
            const font = a.amount
            const back = b.amount
            return back-font
        })
        return (
            <div className={styles.box}>
                <div className={styles.header}>
                    <Header HeaderData={HeaderData} />
                </div>
                <div className={styles.content}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { this.handleTapChange(tab, index) }}
                        onTabClick={(tab, index) => { this.handleTapClick(tab, index) }}
                    >
                        <div className={styles.chartgroup}>
                            <AchievementTable dataSource={personDataSource} title={title[0]} />
                        </div>
                        <div className={styles.chartgroup}>
                            <AchievementTable dataSource={deptDataSource} title={title[0]} />
                        </div>
                    </Tabs>

                </div>
            </div>
        )
    }
}
export default connect(({ achievementModel }) => ({ achievementModel }))(Achievement)