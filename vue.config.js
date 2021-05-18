const revision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();

module.exports = {
    chainWebpack(config) {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "QuaverPvM";
                args[0].version = revision;
                return args;
            });
    }
}
