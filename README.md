# openHarmony-thrift-demo

Demo for thrift applied to OpenHarmonyOS.

## Start Server

```shell
> cd server
> npm i
> npm run start
```

The OpenHarmonyOS simulator can not access local host like `localhost` or `127.0.0.1`, so we should do Intranet penetration with tools such as `ngrok` and use the new address like `http://60d3-139-159-170-4.ngrok.io`.

## Start Client

```shell
> cd client/entry
> npm i
```

Then open the `client` folder with [DevEco Studio](https://developer.harmonyos.com/en/develop/deveco-studio/), change the host value defined in `index.js` and `config.json` to your new address. 

<img src="https://github.com/konpeki622/openHarmony-thrift-demo/blob/main/list.png" width=300 />

```js
// src/main/js/default/pages/index/index.js
const host = 'http://60d3-139-159-170-4.ngrok.io'; //your host address
```

```json
// src/main/config.js
"default": {
  "network": {
    "cleartextTraffic": true,
    "securityConfig": {
      "domainSettings": {
        "cleartextPermitted": true,
        "domains": [
          {
            "subdomains": true,
            "name": "your host address"
          }
        ]
      }
    }
  }
}
```

To Start it, you need to install a phone simulator with API 6. Run it and click the `create` button, we will get correct data by thrift requesting.

<img src="https://github.com/konpeki622/openHarmony-thrift-demo/blob/main/result.png" width=300 />
