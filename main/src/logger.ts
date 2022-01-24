export const logger = (...args: any[]) => {
    const [first, ...rest] = args;
    if (typeof first === 'string') {
        console.log(`==ECR: ${first}`, ...rest);
    } else {
        console.log('==ECR', ...args);
    }
};

export default logger;
