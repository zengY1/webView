import request from 'utils/request'

import { api } from 'api/api'
const { MessageDetail } = api

export async function messageDetail(params) {
    return request({
        url: MessageDetail,
        method: 'GET',
        data: params,
    })
}