module.exports = {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    entry: '.js/test.js', // I will have to look at this more in depth to get it right, but good enough for now... 
    output: {
        filename: 'bundle.js',
    },
}; 

