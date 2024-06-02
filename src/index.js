/*
 * https://stackoverflow.com/questions/41897420/typescript-and-reactdom-render-method-doesnt-accept-component
 * https://juejin.cn/post/7069598156735905800
 * import React from 'react'
 */
import * as React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
