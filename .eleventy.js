module.exports = function (config) {
    config.addPassthroughCopy('src/img');
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/CNAME');
    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        passthroughFileCopy: true
    };
};