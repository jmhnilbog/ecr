const wrap = <T extends Array<any>, U>(fn: (...args: T) => U) => {
    return (...args: T): U => {
        console.log('== ECR');
        return fn(...args);
        console.log('-- ECR');
    };
};

export const logger = wrap(console.log);

export default logger;
