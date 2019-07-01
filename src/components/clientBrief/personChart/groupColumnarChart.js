import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizgoblin';
const pixelRatio = window.devicePixelRatio * 2;
const defs = [{
    dataKey: 'date',
}, {
    dataKey: 'count',
    tickCount: 5,
}];
function onShowTooltip(ev, chart) {
    const items = ev.items;
    items[0].name = null;
    items[0].name = items[0].origin.name;
    items[0].value = `${items[0].value}人`;
}

class GroupColumnarChart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { dayResultDTOS } = this.props
        const chartArr = []
        dayResultDTOS ? dayResultDTOS.map((item, index) => {
            const dateKey = item ? item.date : ''
            const date1 = dateKey.split('-')
            const date = date1[2] ? date1[2].substring(0,2) : ''
            chartArr.push({
                name:'拜访人数',
                date: date + '日',
                count: item.visitCount,
            })
            chartArr.push({
                name:'拜访次数',
                date: date + '日',
                count: item.visitCustomerCount
            })
        }) : []
        return (
            <Chart width="100%" height="70%" data={chartArr} defs={defs} animate={{ type: 'scaley' }} pixelRatio={pixelRatio} >
                <Axis dataKey="date" />
                <Legend align="center" />
                <Axis dataKey="count" />
                <Tooltip  />
                <Geom geom="interval" position="date*count" color="name" adjust={{ type: 'dodge', marginRatio: 0.05 }} />
            </Chart>
        )
    }
}
export default GroupColumnarChart