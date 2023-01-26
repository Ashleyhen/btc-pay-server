import { PersistentVolume } from "@pulumi/kubernetes/core/v1/persistentVolume";

new PersistentVolume("local-volume",{
	spec:{
		accessModes:["ReadOnlyMany"],
		

		
		
	},
})