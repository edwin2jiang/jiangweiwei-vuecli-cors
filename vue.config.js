// 使用京东万象（https://wx.jdcloud.com/）和聚合数据（https://www.juhe.cn/docs）进行两次请求
// 使用/jdcloud/代理京东请求，使用/juhe/代理聚合请求

module.exports = {
    devServer: {
        host: 'localhost',//target host
        // port: 8236,
        proxy: {
            '/jdcloud/': {
                target: 'https://way.jd.com/',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,            // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/jdcloud/': ''
                }
            },
            '/juhe/': {
                target: 'http://v.juhe.cn/',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,         // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/juhe/': ''
                }
            }
        }
    },
}