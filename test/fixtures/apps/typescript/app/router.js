"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { controller } = app;
    app.get('/', controller.home.index);
};
