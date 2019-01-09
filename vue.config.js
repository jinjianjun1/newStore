module.exports = {
    pages: {
        index1: {
            // page 的入口
            entry: 'src/pages/index1/index1.js',
            // 模板来源
            template: 'public/index1.html',
            // 在 dist/index.html 的输出
            filename: 'index1.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index1',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['index1']
        },
        index2: {
            // page 的入口
            entry: 'src/pages/index2/index2.js',
            // 模板来源
            template: 'public/index2.html',
            // 在 dist/index.html 的输出
            filename: 'index2.html',
            title:'Index2',
            chunks: ['index2']
        }

    }
}