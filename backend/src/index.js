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

// ���������� ��� ���� �����ؿ���(����)
// nginx ���ؼ� express�� ������, ���� �� �� ���� ��(����)
// �� �ܿ� node ������ ���ؼ� ����1�� ����ֱ�(����)
// sql�ۼ��ϱ�(10�� �̻�)(����)
// DB teble ����(�ͼ�)