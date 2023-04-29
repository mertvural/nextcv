import Modal from 'react-modal';
import Image from 'next/image'

export default function ({ setIsOpen, modalIsOpen }) {

    const modalStyles = {
        content: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0, .9)",
            zIndex: "1000",
            border: "0",
            overflowY: "auto"
        }
    };
    return (
        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            style={modalStyles}
        >
            <div className='flex flex-col items-center justify-center'>
                <button onClick={() => setIsOpen(false)} className="px-5 py-2 bg-white">Close</button>
                <h2 className='text-xl text-white mb-1'>Make sure the printer settings are like this</h2>
            </div>
            <picture className='flex justify-center'>
                <Image
                    src="/print-settings.png"
                    alt="Print Settings"
                    width={500}
                    height={844}
                />
            </picture>
        </Modal>
    )
}