/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import http from '@ohos.net.http'

export default {
    data: {
        user: {}
    },
    create: function () {
        try {
            const thrift = require('thrift')
            const TJSONProtocol = require('thrift/lib/nodejs/lib/thrift/json_protocol');
            const TAccountService = require('../../../thrift/TAccountService.js')
            const host = 'https://7185-139-159-170-4.ngrok.io'

            const connection = thrift.createOhosConnection(http.createHttp, host, 80, {
                protocol: TJSONProtocol,
                header: {
                    'Content-Type': 'application/json'
                },
                createHttp: http.createHttp
            }),
                client = thrift.createOhosClient(TAccountService, connection);
            const account = {
                uid: 1,
                name: 'hello'
            }

            console.info('requesting...')
            // 调用server端的createAccount方法
            client.createAccount(account).then(() => {
                console.info('client createAccount:', account.uid);
                // 获取刚刚”新建“的account
                client.getAccount(account.uid).then((resp) => {
                    console.info(`client getAccount: uid=${resp.uid}, name=${resp.name}`);
                    this.user = resp
                }).catch(e => {
                    console.info(e)
                })
            }).catch(e => {
                console.info(e)
            })
        } catch (e) {
            console.info(e)
        }
    }
}
