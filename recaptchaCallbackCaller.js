const callbackFinder = function() {
    const client = ___grecaptcha_cfg.clients[0];
    let result = [];
    let firstLevelKeys = Object.keys(client);
    firstLevelKeys.forEach((flk) => {
        if (client[flk] !== undefined) {
            let secondLevelKeys = Object.keys(client[flk]);
            secondLevelKeys.forEach((slk) => {
                if (client[flk][slk] !== undefined && client[flk][slk] !== null) {
                    let thirdLevelKeys = Object.keys(client[flk][slk]);
                    if (thirdLevelKeys.includes("callback")) {
                        result = result.concat([flk, slk]);
                    }
                }
            });
        }
    });
    return result;
}

const callCallbackMethod = function(token) {
	const callbackMethodKeys = callbackFinder();
	window["___grecaptcha_cfg"]["clients"][0][callbackMethodKeys[0]][callbackMethodKeys[1]]["callback"](token)
}
