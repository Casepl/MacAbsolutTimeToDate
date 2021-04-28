import covertTime from './index.js';

const testResult = Object.freeze({
    YES: Symbol('YES'),
    NO: Symbol('NO')
});

function firstTest() {
    const date = 623340153.674588;
    const expectDate = new Date('2020-10-02T14:02:34.000Z');

    if(expectDate.getTime() === covertTime(date).getTime()){
        return testResult.YES;
    } else {
        return testResult.NO;
    }
}

function secondTest() {
    const date = 640865079;
    const expectDate = new Date('2021-04-23T10:04:39.000Z');

    if(expectDate.getTime() === covertTime(date).getTime()){
        return testResult.YES;
    } else {
        return testResult.NO;
    }
}

if( firstTest() === testResult.YES && secondTest() === testResult.YES) {
    console.error("\x1b[32m", 'TEST SUCCESS');
    process.exit(0);
} else {
    console.error("\x1b[31m", 'TEST FAILED');
    process.exit(1);
}

