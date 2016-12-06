import { whereHostNameIsLike } from "../index"

whereHostNameIsLike('nodepod').then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})