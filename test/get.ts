import { getHosts } from "../index"

getHosts().then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})