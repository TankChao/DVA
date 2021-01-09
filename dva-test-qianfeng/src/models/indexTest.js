import * as apis from "../services/example"
export default {
  namespace: "indexTest",
  state: {
    name: "kangchao",
    cnodeData: []
  },
  reducers: {
    // reducers： 修改state，必须要要返回一个state
    setName(state, payLoad) {
      //console.log(payLoad)
      let _state = JSON.parse(JSON.stringify(state))
      _state.name = payLoad.data.name
      return _state;
    },
    setCnodeDataList(state, payLoad) {
      let _state = JSON.parse(JSON.stringify(state))
      _state.cnodeData = payLoad.data
      // console.log(_state)
      return _state
    },
    testPath(state, payLoad) {
      console.log("用户页")
      return state
    }
  },
  effects: {
    //put:发一个 action。
    //call：发一个异步请求。
    *setNameAsync({ payLoad }, { put, call }) {
      yield put({
        type: 'setName',
        data: { name: '异步改名' }
      })
      // yield console.log("run")
    },
    *testCnode({ payLoad }, { put, call }) {
      let rel = yield call(apis.testCnode)
      if (rel.data) {
        yield put({
          type: "setCnodeDataList",
          data: rel.data.data
        })
      }
    }
  },
  subscriptions: {
    // subscriptions：注册一个监听，比如路由发生变化。
    haha({ dispatch, history }) {
      //console.log("run")
      history.listen(({ pathname }) => {
        if (pathname === "/user") {
          //console.log("用户页")
          dispatch({
            type: "testPath"
          })
        }
      })
    }
  }
}
