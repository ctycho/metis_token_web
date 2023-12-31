import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside.ts'
import close from '../../assets/images/close_icon.svg'
import Button from '../ButtonSmall/ButtonSmall.tsx'
import styles from './CardModal.module.css'

interface ICardModal {
    openedModal: boolean,
    closeModal: () => void,
    setOpenedModal: Dispatch<SetStateAction<boolean>>,
    tokenIcon: string,
    cardStateModal: ReactNode,
    cardHistory: Array<ICardHistory>
}

interface ICardHistory {
    stageName: string,
    state: string
}

const CardModal: FC<ICardModal> = ({ openedModal, closeModal, setOpenedModal, tokenIcon, cardStateModal, cardHistory }) => {
    const refModal = useRef(null)
    useClickOutside(refModal, setOpenedModal)

    useEffect(() => {
        if (openedModal) {
            document.body.style.overflow = 'hidden'
        }
    }, [openedModal])

    return openedModal && (
        <>
            <div className={styles.card_modal}>
                <div ref={refModal} className={styles.modal_body}>
                    <div className={styles.modal_header}>
                        <div className={styles.modal_header_state}>
                            {cardStateModal}
                        </div>
                        <div className={styles.modal_header_close} onClick={closeModal}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_title}>
                            <img src={tokenIcon} alt="" />
                        </div>
                        <div className={styles.modal_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className={styles.modal_video}>
                        {/* <img src={video} alt="" /> */}
                        <iframe
                            src="https://www.youtube.com/embed/jYLXorNpLlE">
                        </iframe>
                    </div>
                    <div className={styles.modal_history}>
                        <div className={styles.modal_history_items}>
                            {cardHistory.map((item, index) => {
                                return <div key={index} className={`
                                    ${styles.modal_history_item} 
                                    ${item.state == 'completed' ? styles.modal_history_item_completed : ''}`}
                                    >{item.stageName}</div>
                            })}
                        </div>
                    </div>
                    <Button type="black_btn" text="Start Now" />
                </div>
            </div>
        </>
    )

}

export default CardModal