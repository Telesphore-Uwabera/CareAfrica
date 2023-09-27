import Log from "../libraries/Log";
export class ReplayCallsOnOneSignal {
    static doReplay(stubOneSignal) {
        if (!stubOneSignal)
            return;
        if (Array.isArray(stubOneSignal)) {
            ReplayCallsOnOneSignal.processAsArray(stubOneSignal);
        }
        else if (stubOneSignal.constructor && stubOneSignal.constructor.name === "OneSignalStubES6") {
            ReplayCallsOnOneSignal.processAsES6Stub(stubOneSignal);
        }
        else {
            Log.error("window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined.");
        }
    }
    static processAsArray(stubOneSignal) {
        for (const item of stubOneSignal) {
            try {
                OneSignal.push(item);
            }
            catch (e) {
                // Catch and log error here so other elements still run
                Log.error(e);
            }
        }
    }
    static processAsES6Stub(stubOneSignal) {
        // Transfer properties set;
        if (stubOneSignal.SERVICE_WORKER_PATH)
            OneSignal.SERVICE_WORKER_PATH = stubOneSignal.SERVICE_WORKER_PATH;
        if (stubOneSignal.currentLogLevel)
            OneSignal.log.setLevel(stubOneSignal.currentLogLevel);
        if (stubOneSignal.SERVICE_WORKER_PARAM)
            OneSignal.SERVICE_WORKER_PARAM = stubOneSignal.SERVICE_WORKER_PARAM;
        // 1. Process any array defined BEFORE stubOneSignal was loaded
        if (stubOneSignal.preExistingArray) {
            ReplayCallsOnOneSignal.processAsArray(stubOneSignal.preExistingArray);
        }
        // 2. Process any array defined AFTER stubOneSignal was loaded
        //    Runs methods in order, including firing any promises
        for (const item of stubOneSignal.directFunctionCallsArray) {
            const functionToCall = OneSignal[item.functionName];
            const retValue = functionToCall.apply(OneSignal, item.args);
            if (item.delayedPromise && retValue instanceof Promise) {
                retValue.then(function (...args) {
                    if (item.delayedPromise && item.delayedPromise.resolve) {
                        item.delayedPromise.resolve.apply(null, args);
                    }
                }).catch(function (...args) {
                    if (item.delayedPromise && item.delayedPromise.reject) {
                        item.delayedPromise.reject.apply(null, args);
                    }
                });
            }
        }
    }
}
//# sourceMappingURL=ReplayCallsOnOneSignal.js.map