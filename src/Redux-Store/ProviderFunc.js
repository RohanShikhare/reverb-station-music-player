'use client';

import mainStore from "./store";

const { Provider } = require("react-redux");

export function ProviderFunc({ children }) {
  return <Provider store={mainStore} >{children}</Provider>;
}
