namespace angularTS {
    'use strict';

    export class sidebarCtrl {
        static $inject: Array<string> = ['ngTs$sidebarSvc'];
        constructor(public sidebarApi: ngTs$sidebarSvc) {}

        public open(): void {
            this.sidebarApi.open();
        }

        public close(): void {
            this.sidebarApi.close();
        }

        public toggle(): void {
            this.sidebarApi.toggle();
        } 
    }

    angular
        .module('angularTS')
        .controller('sidebarCtrl', sidebarCtrl);
}