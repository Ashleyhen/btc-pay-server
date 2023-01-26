import * as k8s from "@pulumi/kubernetes";
const torGenLabels = { app: "tor-gen" };
export const torGen = new k8s.apps.v1.Deployment("tor-gen", {
    spec: {
        selector: { matchLabels: torGenLabels },
        replicas: 1,
        template: {
            metadata: { labels: torGenLabels },
            spec: 
            { containers: 
                [ {
                    name: "tor-gen", 
                    image: "btcpayserver/docker-compose-generator:latest",
					// command:[
					// 	"/usr/local/bin/docker-gen",
					// 	"-notify-sighup",
					// 	"tor",
					// 	"-watch",
					// 	"-wait",
					// 	"5s:30s",
					// 	// "/etc/docker-gen/templates/torrc.tmpl",
					// 	// "/usr/local/etc/tor/torrc-2"
					// ] ,
                    ports:[
                        {containerPort:9050}
                    ],
                //     volumeMounts:[
                //         {
                //             mountPath:"/usr/local/etc/tor",
                //             name:"torrc-data"
                //         }
                //     ]
                // } ],
                // volumes:[ {
                //         name:"torrc-data",
                //         persistentVolumeClaim: {
                //                 claimName:"torrc-claim"
                //             }
                    } ],
                restartPolicy:"Always" 
            }
        }
    }
});