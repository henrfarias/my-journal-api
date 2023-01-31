"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (request, response) => response.json({
    message: 'Meu server Express, Typescript e ESLint!',
}));
app.listen(3333, () => {
    console.log('Back-end started in 3333 port!');
});
//# sourceMappingURL=server.js.map