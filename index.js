const CrashDump = (fn) =>
{
    process.stdin.resume();

    const beforeExit = async () =>
    {
        await fn();
        process.exit();
    }

    process.on('beforeExit', beforeExit);
    process.on('uncaughtException', beforeExit);
    process.on('SIGTERM', beforeExit);
    process.on('SIGINT', beforeExit);
    process.on('SIGHUP', beforeExit);
}

module.exports = CrashDump;
