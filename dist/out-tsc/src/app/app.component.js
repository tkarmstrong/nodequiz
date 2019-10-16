import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'Node Quiz';
    }
    validateEmployee(employee) {
        this.http.get('/api/employees/' + employee).subscribe(res => {
            if (res) {
                this.router.navigate(['/quiz-selection']);
            }
            else {
                console.log('Invalid employeeId');
            }
        }, err => {
            console.log('Invalid employeeId');
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map