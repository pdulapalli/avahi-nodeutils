import { setHostname } from "../index"

setHostname('test').then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})