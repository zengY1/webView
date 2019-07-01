import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip } from 'bizgoblin';
const pixelRatio = window.devicePixelRatio * 2;
const defs = [{
  dataKey: 'date',
}, {
  dataKey: 'customerCount',
  tickCount: 5,
}];
const scale={
  sales:{
    type:"linear",
    min:0,
    max:1000,
    minLimit:0
  }
}
function onShowTooltip(ev) {
  const items = ev.items;
  items[0].name = null;
  items[0].name = items[0].origin.name;
  items[0].value = `${items[0].value}人`;
}

class ColumnarChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const chartArr = []
    const { dayResultDTOS } = this.props
    dayResultDTOS ? dayResultDTOS.map((item, index) => {
      const dateKey = item ? item.date : ''
      const date1 = dateKey.split('-')
      const date = date1[2] ? date1[2].substring(0,2) : ''
      chartArr.push({
        date: date + '日',
        customerCount: item.customerCount
      })
    }) : []
    return (
      <Chart width="100%" height="70%" data={chartArr} animate={{ type: 'scaley' }} pixelRatio={pixelRatio} scale={scale} forceFit>
        <Axis dataKey="date" label={{ fontSize: 8 }} />
        <Axis dataKey="customerCount"  name="sales"/>
        <Tooltip showItemMarker={false} onShow={onShowTooltip} />
        <Geom geom="interval" position="date*customerCount" />
      </Chart>
    )
  }
}
export default ColumnarChart