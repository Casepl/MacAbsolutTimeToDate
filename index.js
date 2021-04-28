const COREDATA_START_DATE = 978307200; // Jan 1 2001 00:00:00 GMT.

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

export default function (time) {
    let coreDataTimestamp;

    if (isFloat(time)) {
        const seconds = time.toFixed();
        coreDataTimestamp = Number(seconds);
    } else {
        coreDataTimestamp = time;
    }

    const unixTimeStamp = new Date(COREDATA_START_DATE + coreDataTimestamp);

    return new Date(unixTimeStamp * 1000);
}
