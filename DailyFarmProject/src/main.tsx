import {createRoot} from 'react-dom/client'
import './index.css'
import {registerSW} from 'virtual:pwa-register';
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

import App from "./App.tsx";

registerSW({immediate: true});

createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
        <App/>
        </Provider>

)
