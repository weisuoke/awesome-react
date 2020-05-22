import { ApplyPluginsType } from '/Users/pingjing/weisuoke/doc/awesome-react/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/pingjing/weisuoke/doc/awesome-react/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Awesome react","meta":{}}],"/state-manage":[{"path":"/state-manage","title":"状态管理","meta":{}}],"/ui":[{"path":"/ui","title":"UI","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"UI","path":"/ui"},{"title":"状态管理","path":"/state-manage"}]},"title":"Awesome react","mode":"site","repoUrl":"https://github.com/weisuoke/awesome-react"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/Readme.md",
          "updatedTime": 1588932202000,
          "slugs": [
            {
              "depth": 1,
              "value": "Awesome react",
              "heading": "awesome-react"
            }
          ],
          "title": "Awesome react"
        },
        "title": "Awesome react"
      },
      {
        "path": "/state-manage",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/state-manage/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/state-manage/Readme.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 1,
              "value": "状态管理",
              "heading": "状态管理"
            },
            {
              "depth": 2,
              "value": "主流方案",
              "heading": "主流方案"
            }
          ],
          "title": "状态管理",
          "nav": {
            "path": "/state-manage",
            "title": "State-manage"
          }
        },
        "title": "状态管理"
      },
      {
        "path": "/ui",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/ui/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ui/Readme.md",
          "updatedTime": 1588955263000,
          "slugs": [
            {
              "depth": 1,
              "value": "UI",
              "heading": "ui"
            },
            {
              "depth": 2,
              "value": "React Component Libraries",
              "heading": "react-component-libraries"
            }
          ],
          "title": "UI",
          "nav": {
            "path": "/ui",
            "title": "Ui"
          }
        },
        "title": "UI"
      }
    ],
    "title": "Awesome react"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
