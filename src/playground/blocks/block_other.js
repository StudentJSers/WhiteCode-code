module.exports = {
    getBlocks() {
        return {
            runJS: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "JS 코드 %1 실행하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'runJS',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'runJS',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    eval(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['run(%1)'] },
            },


            console_log: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "콘솔에 %1 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'console_log',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'console_log',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    console.log(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['console.log(%1)'] },
            },
            console_warn: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "콘솔에 경고 %1 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                        null,
                    ],
                    type: 'console_warn',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'console_warn',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    console.warn(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['console.warn(%1)'] },
            },
            console_error: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "콘솔에 오류 %1 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                        null,
                    ],
                    type: 'console_error',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'console_error',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    console.error(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['console.error(%1)'] },
            },
            alert: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "경고창 %1 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                        null,
                    ],
                    type: 'alert',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'alert',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    alert(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['alert(%1)'] },
            },




            toast_success: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "토스트 %1 성공 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'toast_success',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'toast_success',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    Entry.toast.success('알림', message, true);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['toast_success(%1)'] },
            },
            toast_warning: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "토스트 %1 경고 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'toast_warning',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'toast_warning',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    Entry.toast.warning('알림', message, true);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['toast_warning(%1)'] },
            },
            toast_alert: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "토스트 %1 오류 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'toast_alert',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'toast_alert',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    Entry.toast.alert('알림', message, true);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['toast_alert(%1)'] },
            },

            stop_project: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: '작품 멈추기',
                statements: [],
                params: [
                    {
                        type: 'Indicator',
                        img: 'block_icon/looks_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [null],
                    type: 'stop_project',
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    Entry.engine.toggleStop();
                    return script.callReturn();
                },
                syntax: { js: [], py: ['stop_project()'] },
            },

            entry_console_print: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "엔트리 콘솔에 %1 출력하기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'entry_console_print',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'entry_console_print',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    const message = script.getValue('VALUE', script);

                    Entry.console.print(message);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['Entry.console_print(%1)'] },
            },

            entry_console_clear: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic',
                template: "엔트리 콘솔 모두 지우기",
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['Hello, world!'],
                        },
                    ],
                    type: 'entry_console_clear',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'entry_console_clear',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'text',
                isNotFor: [],
                func(sprite, script) {
                    Entry.console.clear();
                    return script.callReturn();
                },
                syntax: { js: [], py: ['Entry.console_print(%1)'] },
            },

            get_browser: {
                color: EntryStatic.colorSet.block.default.OTHER,
                outerLine: EntryStatic.colorSet.block.darken.OTHER,
                skeleton: 'basic_string_field',
                template: '브라우저 정보',
                statements: [],
                params: [],
                events: {},
                def: {
                    params: [],
                    type: 'get_browser',
                },
                class: 'browser',
                isNotFor: [],
                func() {
                    return Entry.userAgent;
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: 'get_browser()',
                            blockType: 'param',
                        },
                    ],
                },
            },

        };
    },
};
