import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { HashRouter } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Chain,
  Wallet,
  getWalletConnectConnector,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import merge from "lodash.merge";

const myTheme = merge(darkTheme(), {
  blurs: {
    modalOverlay: "blur(2px)",
  },
  colors: {
    accentColor: "white",
    profileActionHover: "rgba(224, 232, 255, 1)",
    modalBorder: "rgba(110, 131, 205, 0.2)",
    menuItemBackground: "rgba(31, 35, 50, 0.4);",
    // modalBackdrop: "blur(12.5px)",

    selectedOptionBorder: "rgba(224, 232, 255, 1)",
    modalBackground: "rgba(52, 58, 115, 1)",
  },
  radii: {
    modal: "0.5rem",
    menuButton: "6px",
    modalMobile: "28px",
  },
  fonts: {
    body: "Poppins",
  },
});
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains
// });

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      trustWallet({ chains }),
      coinbaseWallet({ chains }),
      walletConnectWallet({ chains }),
      // rainbowWallet({ chains }),
      // injectedWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// metaMaskWallet(options: {
//   chains: Chain[];
//   shimDisconnect?: boolean;
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider theme={myTheme} chains={chains} modalSize="compact">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
