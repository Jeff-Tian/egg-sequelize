"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        await ctx.model.Monkey.findUser();
        await ctx.model.User.associate();
        await ctx.model.User.test();
    }
}
exports.default = HomeController;
