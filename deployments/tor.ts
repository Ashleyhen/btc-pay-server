import * as k8s from "@pulumi/kubernetes";
const torLabels = { app: "tor" };
export const tor = new k8s.apps.v1.Deployment("tor", {
    spec: {
        selector: { matchLabels: torLabels },
        replicas: 1,
        template: {
            metadata: { labels: torLabels },
            spec: 
            { containers: 
                [ {
                    name: "tor", 
                    image: "btcpayserver/tor:0.4.7.10",
					env:[{
                            name:"TOR_ADDITIONAL_CONFIG",
                            value:"/usr/local/etc/tor/torrc-2"
                        }, {
                            name:"TOR_EXTRA_ARGS",
                            value:"CookieAuthentication 1"
                        },{
                            name:"TOR_PASSWORD",
                            value:"btcpayserver"
                        }],
                    ports:[
                        {containerPort:9050}
                    ]
                } ],
                restartPolicy:"Always" 
            }
        }
    }
});