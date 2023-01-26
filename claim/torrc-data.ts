import * as k8s from "@pulumi/kubernetes";
import { PersistentVolume } from "@pulumi/kubernetes/core/v1";
import { PersistentVolumeClaim } from "@pulumi/kubernetes/core/v1/persistentVolumeClaim";

export const torrPVC =new PersistentVolumeClaim("torrc-claim",{
	spec:{
		storageClassName:"manual",
		accessModes:["ReadOnlyMany"],
		resources:{
			requests:{
				"storeage":"100Mi"
				
			}
		}
	},
})
