import { GrClose } from "react-icons/gr"

const CloseButton = ({addChannel, changeAddChannel}) => {
    return (
        <div className="sidebar-add-icon xmark">
            <GrClose fill='#fff' onClick={() => {
                changeAddChannel(false)
            }
            } title='channel-add-btn' />
        </div>
    )
}

export default CloseButton