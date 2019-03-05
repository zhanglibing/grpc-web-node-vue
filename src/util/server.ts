import grpcWeb from 'grpc-web';
// @ts-ignore
import guideClient from '../protos/server_grpc_web_pb';
// @ts-ignore
import {userId, userInfo} from '../protos/server_pb';

let RouteGuideClient=guideClient.RouteGuideClient;

class EchoApp {
    echoService_: RouteGuideClient;

    constructor(echoService: RouteGuideClient) {
        this.echoService_ = echoService;
    }

    request(params:Object){
        return new Promise((resolve, reject) => {
            const request = new userId();
            /*
            * 设置参数
            * 参数名称是id
            * setId()
            * */
            request.setId(params.id);
            this.echoService_.getUserInfo(
                // request, {'custom-header-1': 'value1'},
                request, null,
                (err: grpcWeb.Error, response: userInfo) => {
                    console.log(response)
                    if (err) {
                        console.log('失败')
                        reject(err)
                    } else {
                        console.log(12)
                        console.log(response)
                        resolve(response.getMessage())
                    }
                }
            )
        })
    }
}

//暂时http协议还无法访问
let echoService = new  RouteGuideClient('http://localhost:50053', null, null);
export const server = new EchoApp(echoService);
