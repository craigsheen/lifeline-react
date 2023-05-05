"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_modal_1 = __importDefault(require("react-modal"));
var logo_1 = __importDefault(require("./logo"));
require("./styles.css");
var Lifeline = function () {
    var _a = React.useState('base'), selectedOption = _a[0], setSelectedOption = _a[1];
    var modalStyles = {
        content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }
    };
    // Add a way to close the modal all together on each screen
    if (selectedOption === 'base') {
        return (React.createElement("button", { className: 'button', onClick: function () { return setSelectedOption('questions'); } }, "How are you feeling right now?"));
    }
    if (selectedOption === 'lifelineSupportToolkit') {
        return (React.createElement("section", { className: 'section' },
            React.createElement(react_modal_1.default, { isOpen: true, style: modalStyles, contentLabel: "Lifeline Modal" },
                React.createElement("a", { onClick: function () { return setSelectedOption('average'); }, style: { cursor: 'pointer' } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "30", height: "30", viewBox: "0 0 256 256", xmlSpace: "preserve" },
                        React.createElement("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" },
                            React.createElement("path", { d: "M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                            React.createElement("path", { d: "M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })))),
                React.createElement("div", { style: { marginTop: '20px' } },
                    React.createElement(logo_1.default, null)),
                React.createElement("h1", { className: 'heading' }, "Lifeline Support Toolkit"),
                React.createElement("p", null, "Lifeline's Support Toolkit is a free online tool to help you find ways to improve how you're feeling. It includes;"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Practical, plain language information and advice"),
                    React.createElement("li", null, "Evidence based short term and long term strategies for managing your mental health"),
                    React.createElement("li", null, "Curated tools, techniques and apps you can use on your own to help"),
                    React.createElement("li", null, "Real stories of other people's experiences"),
                    React.createElement("li", null, "Other support services you can connect with.")),
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('openExternal'); } },
                        "Access online Support Toolkit",
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "lifeline.org.au/toolkit"))))));
    }
    if (selectedOption === 'lifelineCrisisSupport') {
        return (React.createElement("section", { className: 'section' },
            React.createElement(react_modal_1.default, { isOpen: true, style: modalStyles, contentLabel: "Lifeline Modal" },
                React.createElement("a", { onClick: function () { return setSelectedOption('average'); }, style: { cursor: 'pointer' } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "30", height: "30", viewBox: "0 0 256 256", xmlSpace: "preserve" },
                        React.createElement("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" },
                            React.createElement("path", { d: "M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                            React.createElement("path", { d: "M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })))),
                React.createElement("div", { style: { marginTop: '20px' } },
                    React.createElement(logo_1.default, null)),
                React.createElement("h1", { className: 'heading' }, "Lifeline Crisis Toolkit"),
                React.createElement("p", null, "Lifeline is free and confidential. You can speak with a trained Crisis Supporter over the phone, or through text."),
                React.createElement("ul", null,
                    React.createElement("li", null, "You can choose to remain anonymous."),
                    React.createElement("li", null, "Talk about whatever's on your mind, nothing is too big or too small."),
                    React.createElement("li", null, "Your Crisis Supporter will listen, provide support, and can work with you to explore your options for further help.")),
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    React.createElement("a", { className: 'button', href: "tel: 13 11 14" },
                        "Call Lifeline",
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "13 11 14")),
                    React.createElement("a", { className: 'button', href: "sms:+61477131114?&body=Hi%2C%20I%E2%80%99d%20like%20to%20connect%20with%20a%20Lifeline%20Crisis%20Supporter." },
                        "Text Lifeline",
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "0477 13 11 14")),
                    React.createElement("a", { className: 'button', href: 'https://lifeline.org.au/crisis-chat', target: '_blank' },
                        "Chat with Lifeline",
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "lifeline.org.au/crisis-chat"))))));
    }
    if (selectedOption === 'openExternal') {
        return (React.createElement("iframe", { src: 'https://mellifluous-empanada-24e5c2.netlify.app', style: { height: '100vh', width: '100vw' } }));
    }
    if (selectedOption === 'good') {
        return (React.createElement("section", { className: 'section' },
            React.createElement("p", null, "That's great to hear! Don't forget Lifeline are always here if you need us.")));
    }
    if (selectedOption === 'average') {
        return (React.createElement("section", { className: 'section' },
            React.createElement(react_modal_1.default, { isOpen: true, style: modalStyles, contentLabel: "Lifeline Modal" },
                React.createElement("a", { onClick: function () { return setSelectedOption(''); }, style: { cursor: 'pointer' } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "30", height: "30", viewBox: "0 0 256 256", xmlSpace: "preserve" },
                        React.createElement("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" },
                            React.createElement("path", { d: "M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                            React.createElement("path", { d: "M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })))),
                React.createElement("h1", { className: 'heading' }, "I'm feeling average"),
                React.createElement("div", { className: 'panel' },
                    React.createElement(logo_1.default, null),
                    React.createElement("p", null, "It's never too early to take steps to manage your mental health."),
                    React.createElement("p", null, "You can connect with a Lifeline Crisis Supporter via phone, text or online chat at anytime."),
                    React.createElement("p", null, "Lifeline also offer an online Support Toolkit, full of practical information, tools, techniques, stories and more, to help you understand what you're feeling and find ways to help."),
                    React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                        React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('lifelineCrisisSupport'); } },
                            "Contact Lifeline directly",
                            React.createElement("br", null),
                            React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "Phone, Text or Chat")),
                        React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('openExternal'); } },
                            "Access online Support Toolkit",
                            React.createElement("br", null),
                            React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "lifeline.org.au/toolkit")),
                        React.createElement("a", { className: 'muted-button', onClick: function () { return setSelectedOption('lifelineSupportToolkit'); } }, "Learn more about support toolkit"))))));
    }
    if (selectedOption === 'bad') {
        return (React.createElement("section", { className: 'section' },
            React.createElement(react_modal_1.default, { isOpen: true, style: modalStyles, contentLabel: "Lifeline Modal" },
                React.createElement("a", { onClick: function () { return setSelectedOption(''); }, style: { cursor: 'pointer' } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "30", height: "30", viewBox: "0 0 256 256", xmlSpace: "preserve" },
                        React.createElement("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" },
                            React.createElement("path", { d: "M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                            React.createElement("path", { d: "M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })))),
                React.createElement("h1", { className: 'heading' }, "I'm not ok"),
                React.createElement("div", { className: 'warning-panel' },
                    React.createElement("p", null,
                        "If life is in danger ",
                        React.createElement("strong", null, "call triple zero (000)."))),
                React.createElement("div", { className: 'panel' },
                    React.createElement(logo_1.default, null),
                    React.createElement("p", null, "If you're open to it, you can speak with a Lifeline Crisis Supporter 24/7 who will listen to and support you without judgement."),
                    React.createElement("p", null, "Crisis looks different for everyone."),
                    React.createElement("p", null, "Whether you're thinking about suicide, having a difficult time or require some support now, Lifeline is here for you."),
                    React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                        React.createElement("a", { className: 'button', href: "tel: 13 11 14" },
                            "Call Lifeline",
                            React.createElement("br", null),
                            React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "13 11 14")),
                        React.createElement("a", { className: 'button', href: "sms:+61477131114?&body=Hi%2C%20I%E2%80%99d%20like%20to%20connect%20with%20a%20Lifeline%20Crisis%20Supporter." },
                            "Text Lifeline",
                            React.createElement("br", null),
                            React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "0477 13 11 14")),
                        React.createElement("a", { className: 'button', href: 'https://lifeline.org.au/crisis-chat', target: '_blank' },
                            "Chat with Lifeline",
                            React.createElement("br", null),
                            React.createElement("span", { style: { fontSize: '12px', fontWeight: 400 } }, "lifeline.org.au/crisis-chat")),
                        React.createElement("a", { className: 'muted-button', onClick: function () { return setSelectedOption('lifelineCrisisSupport'); } }, "Learn more"))))));
    }
    return (React.createElement("section", { className: 'section' },
        React.createElement(react_modal_1.default, { isOpen: true, style: modalStyles, contentLabel: "Lifeline Modal" },
            React.createElement("a", { onClick: function () { return setSelectedOption('base'); }, style: { cursor: 'pointer' } },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "30", height: "30", viewBox: "0 0 256 256", xmlSpace: "preserve" },
                    React.createElement("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" },
                        React.createElement("path", { d: "M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                        React.createElement("path", { d: "M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })))),
            React.createElement("h1", { className: 'heading' }, "How are you feeling right now?"),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('good'); } }, "I'm feeling good!"),
                React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('average'); } }, "I'm feeling average"),
                React.createElement("a", { className: 'button', onClick: function () { return setSelectedOption('bad'); } }, "I'm not okay")))));
};
exports.default = Lifeline;
