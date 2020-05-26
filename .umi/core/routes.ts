import { ApplyPluginsType } from '/Users/pingjing/weisuoke/doc/awesome-react/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/pingjing/weisuoke/doc/awesome-react/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Awesome react","meta":{}}],"/basic":[{"path":"/basic","title":"知识点","meta":{}},{"path":"/basic/react-children-map","title":"React.Children.map","meta":{}}],"/state-manage":[{"path":"/state-manage","title":"状态管理","meta":{}}],"/ui":[{"path":"/ui","title":"UI","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"知识点","path":"/basic"},{"title":"UI","path":"/ui"},{"title":"状态管理","path":"/state-manage"}]},"title":"Awesome react","mode":"site","repoUrl":"https://github.com/weisuoke/awesome-react"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/Readme.md",
          "updatedTime": 1590456099000,
          "slugs": [
            {
              "depth": 1,
              "value": "Awesome react",
              "heading": "awesome-react"
            },
            {
              "depth": 2,
              "value": "Blog",
              "heading": "blog"
            }
          ],
          "title": "Awesome react"
        },
        "title": "Awesome react"
      },
      {
        "path": "/basic",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/basic/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/basic/Readme.md",
          "updatedTime": 1590456099000,
          "slugs": [
            {
              "depth": 1,
              "value": "知识点",
              "heading": "知识点"
            },
            {
              "depth": 2,
              "value": "React.Children.map",
              "heading": "reactchildrenmap"
            },
            {
              "depth": 3,
              "value": "待阅读文章",
              "heading": "待阅读文章"
            }
          ],
          "title": "知识点",
          "nav": {
            "path": "/basic",
            "title": "Basic"
          }
        },
        "title": "知识点"
      },
      {
        "path": "/basic/react-children-map",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/basic/react-children-map.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/basic/react-children-map.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 1,
              "value": "React.Children.map",
              "heading": "reactchildrenmap"
            },
            {
              "depth": 2,
              "value": "遍历子元素",
              "heading": "遍历子元素"
            }
          ],
          "title": "React.Children.map",
          "nav": {
            "path": "/basic",
            "title": "Basic"
          }
        },
        "title": "React.Children.map"
      },
      {
        "path": "/state-manage",
        "component": require('/Users/pingjing/weisuoke/doc/awesome-react/docs/state-manage/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/state-manage/Readme.md",
          "updatedTime": 1590135878000,
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
