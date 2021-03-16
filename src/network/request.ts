import axios from 'axios'

async function axrequest(config:Object){
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://47.110.38.241',
        timeout:5000,
        withCredentials:false
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data 
    },err=>{
        console.log(err)
    })
    return instance(config);
}

async function local_axrequest(config:Object){
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://localhost:3000',
        timeout:5000,
        withCredentials:false
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data 
    },err=>{
        console.log(err)
    })
    return instance(config);
}

export {
    axrequest,
    local_axrequest
}