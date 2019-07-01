import { messageDetail } from './service'
import router from 'umi/router';
import { message } from 'antd';
export default {
    namespace: 'achievementModel',
    state: {
        publickey: '',
        id: 1,
        hasPostVisible: false
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/achievement') {
                    window.localStorage.setItem('token',location.query.token)
                    dispatch({
                        type: 'messageDetail',
                        payload: {
                            id: location.query.id,
                        },
                    })
                }
            })
        },
    },
    effects: {
        * messageDetail({ payload }, { call, put }) {
            const data = yield call(messageDetail, payload)
            if (data.code == 0) {
                yield put({
                    type: 'getSuccess',
                    payload: {
                        staffListData: data.data
                    },
                })
            } else {
                throw data
            }
        },
    },
    reducers: {
        getSuccess(state, { payload: value }) {
            return { ...state, ...value }
        },
    },
};