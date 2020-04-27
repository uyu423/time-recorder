"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon = __importStar(require("luxon"));
class Util {
    static hiMsg() {
        return `👋 어서오세요. ${this.dateTimeShort()}`;
    }
    static byeMsg() {
        return `👍 수고하셨습니다. ${this.dateTimeShort()}`;
    }
    static dateTimeShort() {
        const time = luxon.DateTime.local();
        return time
            .setLocale('ko-kr')
            .setZone('Asia/Seoul')
            .toLocaleString(luxon.DateTime.DATETIME_SHORT);
    }
    static toDateTimeShort(timeStr) {
        const time = luxon.DateTime.fromISO(timeStr);
        return time
            .setLocale('ko-kr')
            .setZone('Asia/Seoul')
            .toLocaleString(luxon.DateTime.DATETIME_SHORT);
    }
    static currentTimeStamp() {
        const time = luxon.DateTime.utc();
        return time.toISO();
    }
    static formatStrToDateTime(date, format) {
        const time = luxon.DateTime.fromFormat(date, format).toUTC();
        return time;
    }
    static currentDate() {
        return this.currentDateWithFormat('yyyyLLdd');
    }
    static currentDateWithFormat(format) {
        const time = luxon.DateTime.local();
        return time
            .setLocale('ko-kr')
            .setZone('Asia/Seoul')
            .toFormat(format);
    }
    static getBetweenDuration(a, b) {
        const aTime = luxon.DateTime.fromISO(a);
        const bTime = luxon.DateTime.fromISO(b);
        const duration = bTime.diff(aTime).normalize();
        return duration;
    }
    static isEmpty(value) {
        if (value === undefined || value === null) {
            return true;
        }
        if (typeof value === 'number' && isNaN(value)) {
            return true;
        }
        if (typeof value === 'string' && value === '') {
            return true;
        }
        if (typeof value === 'object' && Array.isArray(value) && value.length < 1) {
            return true;
        }
        if (typeof value === 'object' &&
            !(value instanceof Date) &&
            Object.keys(value).length < 1) {
            return true;
        }
        return false;
    }
    static isNotEmpty(value) {
        return !Util.isEmpty(value);
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map