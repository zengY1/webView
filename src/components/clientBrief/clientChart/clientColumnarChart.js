import React, { Component } from 'react'
import { Chart, Axis, Geom, Coord, Global, Tooltip } from 'bizgoblin';
const pixelRatio = window.devicePixelRatio * 2;
const defs = [{
  dataKey: 'date',
}, {
  dataKey: 'customerCount',
  tickCount: 5,
}];
function onShowTooltip(ev) {
  const items = ev.items;
  items[0].name = null;
  items[0].name = items[0].title;
  items[0].value = `${items[0].value}人`;
}
function formatLabel(text, index, total) {
  const textCfg = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}
const label = {
  offset: 0,
  textStyle: {
    textAlign: 'center',
    width: 30
  },
}
class ClientColumnarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartArr: []
    }
  }
  componentWillMount() {
    const chartArr = [{ date: '常州服务中心', customerCount: 0 }]
    const { deptResultDTOS } = this.props
    deptResultDTOS ? deptResultDTOS.map((item, index) => {
      chartArr.push({
        date: item.deptName,
        customerCount: item.customerCount
      })
    }) : [],
      this.setState({
        chartArr
      })
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.deptResultDTOS !== nextProps.deptResultDTOS) {

      if (nextProps.deptResultDTOS) {
        const chartArr = []
        const { deptResultDTOS } = nextProps
        deptResultDTOS ? deptResultDTOS.map((item, index) => {
          chartArr.push({
            date: item.deptName,
            customerCount: item.customerCount
          })
        }) : [],
          this.setState({
            chartArr
          })
      }
    }
  }
  render() {

    return (
      <Chart width="100%" height="70%" data={this.state.chartArr}  animate={{ type: 'scaley' }} pixelRatio={pixelRatio}  forceFit>
        <Axis dataKey="date" label={label} grid={null} />
        <Axis dataKey="customerCount" label={label} line={null} grid={Global._defaultAxis.grid} />
        <Coord transposed />
        <Tooltip showItemMarker={false} onShow={onShowTooltip} />
        <Geom geom="interval" position="date*customerCount" />
      </Chart>
    )
  }
}
export default ClientColumnarChart