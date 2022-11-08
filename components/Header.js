import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi'
import { FaTwitter, FaGithub, FaYoutube, FaGoogleDrive } from "react-icons/fa";
import styles from '../styles/Home.module.css';

export default function Header() {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();

    const { address, isConnected } = useAccount();

    return (
        <div className="navbar text-neutral-content bg-primary-content">
            <div className="flex-1 ml-3 text-gray-50">
                <ul className='flex flex-row justify-between gap-6'>
                    <li><a href="#"><FaGoogleDrive size="2rem" /></a></li>
                    <li><a className={styles.leftToRight} href="https://twitter.com/coffiasd"><FaTwitter size="1rem" className='m-0.5' />TWITTER</a></li>
                    <li><a className={styles.leftToRight} href="https://github.com/coffiasd"><FaGithub size="1rem" className='m-0.5' />GITHUB</a></li>
                    <li><a className={styles.leftToRight} href="#"><FaYoutube size="1rem" className='m-0.5' />YOUTUBE</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                {isConnected ?
                    (<><button className="btn btn-sm btn-info ml-3 normal-case" onClick={openAccountModal}>Profile</button><button className="btn btn-sm btn-error ml-3 normal-case " onClick={openChainModal}>Chain</button></>)
                    :
                    (<button className="btn btn-sm btn-error ml-3 normal-case" onClick={openConnectModal}>connect wallet</button>)
                }
            </div>
        </div >
    )
}