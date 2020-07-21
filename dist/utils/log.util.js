"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWarning = exports.printError = void 0;
var chalk = require("chalk");
/**
 * Prints the error to the console
 */
exports.printError = function (message, error) {
    console.log('\n❌ ', chalk.red(message));
    if (error) {
        console.error(error);
    }
};
/**
 * Prints the warning to the console
 */
exports.printWarning = function (message, error) {
    console.log('\n🚨 ', chalk.yellow(message));
    if (error) {
        console.error(error);
    }
};
//# sourceMappingURL=log.util.js.map