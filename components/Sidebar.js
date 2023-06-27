import { FaOctopusDeploy } from "react-icons/fa";
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { useEffect, useState } from "react";
import { FaShoppingCart, FaListUl, FaFaucet } from "react-icons/fa";
import { useRouter } from 'next/router';

export default function Sidebar() {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const { address, isConnected } = useAccount();
    const [tab, setTab] = useState(false);
    const { switchNetwork } = useSwitchNetwork()
    const { chain } = useNetwork();

    const [login, setLogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isConnected) {
            setLogin(true);
        }
        setTab(router.asPath);
    }, [isConnected])

    return (
        <aside className="absolute flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 top-0 left-0 md:hidden lg:flex">
            <a className='ml-5 in-line flex items-center' href="/">
                <FaOctopusDeploy className='text-success' size="1.5rem" />
                <span className="ml-5">PeerTradeX</span>
            </a>


            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <a className={`flex items-center px-4 py-2 text-gray-700 ${tab == '/swap' ? 'bg-gray-100' : ''} rounded-md  dark:text-gray-200`} href="/swap">
                        <FaShoppingCart size="1rem" />
                        <span className="mx-4 font-medium">Trade</span>
                    </a>


                    <a className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 ${tab == '/history' ? 'bg-gray-100' : ''} transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`} href="/history">
                        <FaListUl size="1rem" />
                        <span className="mx-4 font-medium">On-Sale</span>
                    </a>

                    <a className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 ${tab == '/faucet' ? 'bg-gray-100' : ''} transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`} href="/faucet">
                        <FaFaucet size="1rem" />
                        <span className="mx-4 font-medium">Faucet</span>
                    </a>

                </nav>

                <div className=''>
                    {login && chain.id != 1663 && <button className="btn btn-sm btn-warning ml-3 normal-case" onClick={() => switchNetwork(1663)}>switch net</button>}

                    {login && chain.id == 1663 &&
                        (<><button className="btn btn-sm btn-info ml-3 normal-case" onClick={openAccountModal}>Profile</button><button className="btn btn-sm btn-error ml-3 normal-case " onClick={openChainModal}>Chain</button></>)

                    }

                    {!login && <button className="btn btn-sm btn-error ml-3 normal-case" onClick={openConnectModal}>connect wallet</button>}
                </div>
            </div>
        </aside>
    )
}