// import { useState } from 'react'

import TitleOne from '../TitleOne/TitleOne.tsx'
import SliderMain from '../SliderMain/SliderMain.tsx'
import styles from './SeasonOne.module.css'
import { useAccount } from 'wagmi'


function SeasonOne() {
    // const [ claimTokenDisabled, disableClaimButton ] = useState(false)
    const { isConnected, isConnecting } = useAccount()

    return (
        <>
            <div className={styles.content}>
                <div className="container">
                    <SliderMain />
                    <div className={styles.main_info}>
                        <TitleOne text='Season One' titleType='white' />
                        <div className={styles.info_text}>
                            <p>
                            During Community Testing, anyone will be able to contribute to our upcoming decentralized sequencer, without any coding experience needed! 
                            </p>
                            <p>
                            The activity will be divided in two (2) Seasons.
                            </p>
                            <p>
                            For Season 1, specifically, users will be able to explore decentralized apps (DApps) on Sepolia testnet, and earn points by completing each of the actions!
                            </p>
                            <p>
                            This page will provide provide you everything you need to succeed.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <center>{(!isConnected || !isConnecting) && <w3m-button />}</center>
                    
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    {/* <BigButtonPrimary /> */}
                </div>
            </div>
        </>
    )
}

export default SeasonOne