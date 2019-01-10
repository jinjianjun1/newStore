const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    runtimeCompiler : true,
    publicPath: "/newStore/tree/master/dist/",
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: 'dist',
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'public/index.html',
            filename: 'index.html',
            title:'index',
            chunks: ['index']
        },
        cart: {
            entry: 'src/pages/cart/cart.js',
            template: 'public/cart.html',
            filename: 'cart.html',
            title:'cart',
            chunks: ['cart']
        },
        category: {
            entry: 'src/pages/category/category.js',
            template: 'public/category.html',
            filename: 'category.html',
            title:'category',
            chunks: ['category']
        },
        goods: {
            entry: 'src/pages/goods/goods.js',
            template: 'public/goods.html',
            filename: 'goods.html',
            title:'goods',
            chunks: ['goods']
        },
        member: {
            entry: 'src/pages/member/member.js',
            template: 'public/member.html',
            filename: 'member.html',
            title:'member',
            chunks: ['member']
        }

    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('js',resolve('src/assets/js'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    }
}