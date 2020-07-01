module.exports = function (config) {
    config.addPassthroughCopy('src/img');
    config.addPassthroughCopy('src/fonts');
    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        passthroughFileCopy: true
    };
};