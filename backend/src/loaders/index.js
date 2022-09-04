// DB 서버 등등 설정 파일
// 환경 변수 가져오는 설정
// proceess.env.db_name

const expressLoader = require('./expressLoader.js');
// const models = require(BASWDIR + './models.js');

async function loaders (app) {
    expressLoader(app, expressLoader);
    try {
        const port = 8080//proceess.env.PORT;
        app.losten(port, () => {
            console.log(`listening on ${port}`);
        })
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = loaders;