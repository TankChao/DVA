import React from 'react';
import { connect } from 'dva';
import * as apis from "../services/example"
class IndexPage extends React.Component {
  handleSetName = () => {
    this.props.dispatch({
      type: "indexTest/setName",
      data: {
        name: "蜘蛛侠"
      }
    })
  }
  setNameAsync = () => {
    this.props.dispatch({
      type: "indexTest/setNameAsync"
    })
  }
  componentDidMount() {
    // apis.testCnode().then((res) => {
    //   console.log(res)
    // })

    // 测试 mock 接口
    apis.mockdata().then((res) => {
      console.log(res)
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type: "indexTest/testCnode"
    })
  }
  render() {
    //console.log(this.props.cnodeData)
    return (
      <div>我是首页
        <div>{this.props.msg}</div>
        <div>{this.props.name}</div>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.setNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  // state 就是 models 里面的 state
  //console.log(state)
  return {
    msg: "我爱北京天安门",
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}
export default connect(mapStateToProps)(IndexPage);
//export default IndexPage;
