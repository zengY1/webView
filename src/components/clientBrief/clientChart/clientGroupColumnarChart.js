import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip, Legend ,Coord, Global,} from 'bizgoblin';
const pixelRatio = window.devicePixelRatio * 2;

const defs = [{
    dataKey: 'label',
}, {
    dataKey: 'count',
    tickCount: 5,
}];
function onShowTooltip(ev) {
    const items = ev.items;
    items[0].name = null;
    items[0].name = items[0].origin.name;
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
class ClientGroupColumnarChart extends Component {
    constructor(props) {
        super(props)
        this.state={
            chartArr:[]
        }
    }
    componentWillMount() {
        const { deptResultDTOS } = this.props
        const chartArr = [{
            name:'拜访人数',
            label: '南京中心',
            count: 0,
        }]
        deptResultDTOS ? deptResultDTOS.map((item, index) => {
            chartArr.push({
                name:'拜访人数',
                label: item.deptName,
                count: item.visitCount,
            })
            chartArr.push({
                name:'拜访次数',
                label: item.deptName,
                count: item.visitCustomerCount
            })
        }) : []
          this.setState({
            chartArr
          })
      }
      componentWillReceiveProps = (nextProps) => {
        if (this.props.deptResultDTOS !== nextProps.deptResultDTOS) {
    
          if (nextProps.deptResultDTOS) {
              const {deptResultDTOS}=nextProps
            const chartArr = []
            deptResultDTOS ? deptResultDTOS.map((item, index) => {
                chartArr.push({
                    name:'拜访人数',
                    label: item.deptName,
                    count: item.visitCount,
                })
                chartArr.push({
                    name:'拜访次数',
                    label: item.deptName,
                    count: item.visitCustomerCount
                })
            }) : []
              this.setState({
                chartArr
              })
          }
        }
      }
    render() {
      
        return (
            <Chart width="100%" height="70%" data={this.state.chartArr}  animate={{ type: 'scaley' }} pixelRatio={pixelRatio} forceFit>
                <Axis dataKey="label" label={{ fontSize: 12 }} grid={null}/>
                <Legend align="center" />
                <Axis dataKey="count"  label={formatLabel} grid={Global._defaultAxis.grid} line={null}/>
                <Coord transposed />
                <Tooltip showItemMarker={false} onShow={onShowTooltip} />
                <Geom geom="interval" position="label*count" color="name" adjust={{ type: 'dodge', marginRatio: 0.05 }} />
            </Chart>
        )
    }
}
export default ClientGroupColumnarChart