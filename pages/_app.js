import '../styles/globals.css'
//wagmi.
import { http, createConfig, WagmiProvider } from 'wagmi'
//rainbow kit UI framework.
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/Home.module.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
  optimism,
  arbitrum,
  base,
  bsc,
  scroll,
  blast
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const Local = {
  id: 31337,
  name: 'Local',
  network: 'Local',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: {
      http: ['https://127.0.0.1:8545']
    },
    default: {
      http: ['https://127.0.0.1:8545']
    },
  },
  testnet: true,
}

const queryClient = new QueryClient();

const chains = [Local, sepolia];

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'xx',
  chains: chains,
  ssr: true,
});


function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp
