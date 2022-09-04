async function main() {
    require('dotenv').config();

    const express = require('express');
    const loaders = require('./loaders');

    const app = express();

    try {
        console.log('Starting');
        await loaders(app);
    } catch (err) {
        console.log(err);
    }
}

main()

// 시퀄라이즈 사용 여부 결정해오기(아현)
// nginx 대해서 express와 차이점, 같이 쓸 때 좋은 점(아현)
// 이 외에 node 구조에 대해서 예시1개 들어주기(아현)
// sql작성하기(10개 이상)(아현)
// DB teble 생성(익선)