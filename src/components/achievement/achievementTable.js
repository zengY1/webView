import React, { Component } from 'react'
import { Money } from 'utils'
import { Table } from 'antd'
import { first, second, thrid } from './../../../public'
import styles from './achievementTable.less'
const columns = [
    {
        title: '排名',
        key: 'id',
        render: (text, record, index) => {
            if (index === 0) {
                return <img alt="first" src={first} width='34' />
            } else if (index === 1) {
                return <img alt="second" src={second} width='34' />
            } else if (index === 2) {
                return <img alt="thrid" src={thrid} width='34' />
            } else {
                return <span className={styles.tableName}>{index + 1}</span>
            }
        },
    }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        render(name) {
            return <span className={styles.tableName}>{name}</span>
        },
    }, {
        title: '业绩',
        dataIndex: 'amount',
        key: 'amount',
        align: 'right',
        render(amount) {
            const money = Money(amount, 2)
            return <span className={styles.tableName}>{money}元</span>
        },
    },
]
class AchievementTable extends Component {
    render() {
        const { dataSource, title } = this.props
        return (
            <div>
                <div className={styles.chartDateTitle}>{title}</div>
                <div className={styles.table}>
                    <Table dataSource={dataSource} columns={columns} pagination={false} rowKey={dataSource => dataSource.id} />
                </div>
            </div>
        )
    }
}
export default AchievementTable