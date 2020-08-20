export default Array(20)
    .fill(undefined)
    .map((_, index) => {
        return {
            title: `TEST${index}`,
            description: `TEST${index} DESCRIPTION: a long long long long long long long long text`,
            date: new Date().valueOf(),
            path: 'test/index.html',
        };
    });
