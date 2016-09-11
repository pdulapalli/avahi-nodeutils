import * as Promise from "bluebird";

import {exec} from "child_process"

export function setHostname(hostname: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        exec('avahi-set-host-name ' + hostname, (err, stdout, stderr) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }

        })
    })

}



