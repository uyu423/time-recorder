"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const functions_1 = require("./functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((_, response) => {
    response.send('Hello from Firebase!');
});
exports.command_ping = functions.https.onRequest(functions_1.commandPing);
exports.command_history = functions.https.onRequest(functions_1.commandHistory);
exports.get_all = functions.https.onRequest(functions_1.getAll);
exports.get_groups = functions.https.onRequest(functions_1.getGroups);
exports.get_user = functions.https.onRequest(functions_1.getUser);
exports.message_action = functions.https.onRequest(functions_1.messageAction);
//# sourceMappingURL=index.js.map