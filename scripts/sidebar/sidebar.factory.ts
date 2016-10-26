namespace angularTS {
    'use strict';

    export class ngTs$sidebarSvc {
        constructor(private $log:angular.ILogService) {}

        private state:boolean = false;

        public get isOpened():boolean {

            return this.state;
        }

        private set changeState(state:boolean){

            this.state = state;
            this.$log.info(`state changed to ${this.state} `)
        }

        public open():void {

            this.changeState = true;
        }

        public close():void {

            this.changeState = false;
        }

        public toggle():void {

            this.changeState = !this.state;
        }
    }

    angular
        .module('angularTS')
        .service('ngTs$sidebarSvc', ngTs$sidebarSvc);
}