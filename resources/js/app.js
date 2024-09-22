"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_2 = require("@inertiajs/react");
const inertia_helpers_1 = require("laravel-vite-plugin/inertia-helpers");
(0, react_2.createInertiaApp)({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => (0, inertia_helpers_1.resolvePageComponent)(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        (0, client_1.createRoot)(el).render(react_1.default.createElement(App, { ...props }));
    },
});
