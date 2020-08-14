import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    routes: [
        // 基本空白布局
        {
            path: '/',
            component: '../layouts/BlankLayout',
            routes: [
                // 基本框架布局
                { 
                    path: '/', 
                    component: '../layouts/BasicLayout' ,
                    routes: [
                        { path: '/', component: '../pages/index/DefaultContent' },
                        { path: '/user/login', component: '../pages/user/UserLogin' },
                    ]
                },
            ]
        }
    ],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: false,
            dva: false,
            dynamicImport: false,
            title: 'lmfavor-front',
            dll: false,

            routes: {
                exclude: [
                    /components\//,
                ],
            },
        }],
    ],
}

export default config;
