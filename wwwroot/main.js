// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from './_framework/dotnet.js'

const { setModuleImports, runMain } = await dotnet.create();

const logElement = document.getElementById('log');

setModuleImports('main.js', {
    log(message) {
        logElement.appendChild(document.createTextNode(message));
        logElement.appendChild(document.createElement('br'));
    },
    async getEmptyPromise() { },
});

// run the C# Main() method and keep the runtime process running and executing further API calls
await runMain();