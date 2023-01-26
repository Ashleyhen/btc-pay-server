import * as k8s from "@pulumi/kubernetes";
import {bitcoind} from "./deployments/bitcoind";
import {lightningd} from "./deployments/lightningd"
import {btcServer} from "./deployments/btcpay-server"
import {torGen} from "./deployments/tor-gen"
import {tor} from "./deployments/tor"

// bitcoin set up

export const bitcoindDeploy =bitcoind.metadata.name;
export const lightningdDeploy=lightningd.metadata.name
export const btcpayserverDeploy = btcServer.metadata.name;
export const torDeploy = tor.metadata.name;

// export const torrcVolume  = torrPVC.metadata.name;
export const torGenDeploy = torGen.metadata.name;
