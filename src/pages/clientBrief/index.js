import React, { Component } from 'react'
import { connect } from 'dva';
import { Tabs } from 'antd-mobile'
import { ColumnarChart, GroupColumnarChart, ClientColumnarChart, ClientGroupColumnarChart, Header, PersonTabs } from 'components'
import styles from './index.less'
import { group, kehuxunpan } from './../../../public'
const tabs = [
    { title: '个人' },
    { title: '部门' },
];
class ClientBrief extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleTapChange = (tab, index) => {
       const {dispatch,location}=this.props
       dispatch({
           type:'clientBriefModel/messageDetail',
           payload:{
            id:location.query.id
           }
       })
    }
    handleTapClick = (tab, index) => {
    }
    render() {
        const { staffListData } = this.props.clientBriefModel
        const listData = staffListData ? staffListData : []
        const titleData = listData?listData.title:''
        const title = titleData ? titleData.split('客户简报') : ''
        const content = listData ? listData.content : []
        const dayResultDTOS = content ? content.dayResultDTOS : []
        const deptResultDTOS = content ? content.deptResultDTOS : []
        const customerCount = content ? content.customerCount : 0
        const visitCount = content ? content.visitCount : 0
        const visitCustomerCount = content ? content.visitCustomerCount : 0
        const HeaderData = {
            clientLabel: '我的新增客户',
            clientNumber: customerCount,
            clientUnit: '人',
            visitLabel: '我的新增拜访',
            visitNumber: visitCount + '/' + visitCustomerCount,
            visitUnit: '次'
        }
        const tabClientData = {
            img: group,
            name: '本周新增客户'
        }
        const tabVisitData = {
            img: kehuxunpan,
            name: '本周新增拜访'
        }
        return (
            <div className={styles.box} >
                <div className={styles.header}>
                    <Header HeaderData={HeaderData} />
                </div>
                <div className={styles.content}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onTabClick={(tab, index) => { this.handleTapClick(tab, index) }}
                        swipeable={false}
                    >
                        <div className={styles.chartgroup}>
                            <div className={styles.chartDateTitle}>{title[0]}</div>
                            <PersonTabs tabData={tabClientData} />
                            <ColumnarChart dayResultDTOS={dayResultDTOS} />
                            <PersonTabs tabData={tabVisitData} />
                            <GroupColumnarChart dayResultDTOS={dayResultDTOS} />
                        </div>
                        <div className={styles.chartgroup}>
                            <div className={styles.chartDateTitle}>{title[0]}</div>
                            <PersonTabs tabData={tabClientData} />
                            <ClientColumnarChart deptResultDTOS={deptResultDTOS} />
                            <PersonTabs tabData={tabVisitData} />
                            <ClientGroupColumnarChart deptResultDTOS={deptResultDTOS} />
                        </div>
                    </Tabs>

                </div>
            </div>
        )
    }
}
export default connect(({ clientBriefModel }) => ({ clientBriefModel }))(ClientBrief)