import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// IMPORT MORALIS PROVIDER
import { MoralisProvider } from "react-moralis";

const container = document.getElementById("root");
const root = createRoot(container);

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
});

const serverUrl = "https://0u9iwcrqfpdo.usemoralis.com:2053/server";
const appId = "8Bwz2ylulzLW9frD9GRGDhM4vYhR0q7G6BbfrrIT";

root.render(
	<React.StrictMode>
		<MoralisProvider serverUrl={serverUrl} appId={appId}>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</Provider>
		</MoralisProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
