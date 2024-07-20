import { useState, useMemo } from "react";

import { Route, Routes } from "react-router-dom";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/home/Home";
import Video from "./Pages/Video/Video";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Navbar setSidebarOpen={setSidebarOpen}></Navbar>
            <Routes>
              <Route
                path="/"
                element={<Home sidebarOpen={sidebarOpen}></Home>}
              />
              <Route
                path="/video/:categoryId/:videoId"
                element={<Video></Video>}
              />
            </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
