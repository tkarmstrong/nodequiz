import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.baseURL = 'http://localhost:3000/api/user/';
    }
    getUserById(userId) {
        return this.http.get(this.baseURL + userId);
    }
};
UserService = tslib_1.__decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map