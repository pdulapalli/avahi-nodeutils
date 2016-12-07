import * as Promise from "bluebird";

import { exec } from "child_process"



interface IAvahiHost {
    interface: string;
    ipv6?: string;
    ipv4?: string;
    hostname: string;
    port: number;
    txt: string;
    mac: string;

}



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


export function getHosts(): Promise<IAvahiHost[]> {
    return new Promise<IAvahiHost[]>((resolve, reject) => {
        const results = []
        exec('avahi-browse -a -r -t', (err, stdout, stderr) => {
            if (err) {
                reject(err)
            } else {
                const result = stdout.split('\n')
                for (let i = 0; i < result.length; i++) {
                    const row: any = result[i]
                    if (row.includes("=") && (row.includes("IPv4") || row.includes("IPv6"))) {
                        const words = row.split(' ')

                        if (row.includes("IPv4")) {
                            results.push({ interface: words[1], ipv4: true, ipv6: false, mac:words[4].replace('[','').replace(']','') })
                        } else if (row.includes("IPv6")) {
                            results.push({ interface: words[1], ipv6: true, ipv4: false, mac:words[4].replace('[','').replace(']','') })
                        }
                    } else if (row.includes("=")) {
                        results[results.length - 1][row.split('=')[0].replace(/ /g, '')] = row.split('[')[1].split(']')[0]
                    }
                }
                const newones = []
                for (let i = 0; i < results.length; i++) {
                    if (results[i].ipv6) {
                        results[i].ipv6 = results[i].address
                        results[i].port = parseInt(results[i].port)

                        for (let r = 0; r < results.length; r++) {

                            if (results[r].ipv4 && results[r].hostname === results[i].hostname) {


                                results[i].ipv4 = results[r].address
                                results[r].delete = true


                            }
                        }


                    }
                }

                for (let i = 0; i < results.length; i++) {
                    let newobj = Object['assign']({}, results[i])


                    if (newobj.delete) {
                    } else {
                        delete newobj.address
                        newones.push(newobj)

                    }
                }
                resolve(newones)
            }

        })
    })

}
export function whereHostNameIsLike(name: string): Promise<IAvahiHost[]> {
    return new Promise<IAvahiHost[]>((resolve, reject) => {

        getHosts().then((hosts) => { 
            const hostlikes: IAvahiHost[] = []

            for (let i = 0; i < hosts.length; i++) {
                if (hosts[i].hostname['includes'](name)) {
                    hostlikes.push(hosts[i])
                }
            }
            resolve(hostlikes)
        }).catch((err) => {
            reject(err)
        })

    })

}
