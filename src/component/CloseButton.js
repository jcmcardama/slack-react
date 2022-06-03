import { GrClose } from "react-icons/gr"

const CloseButton = ({addChannel, changeAddChannel}) => {
    return (
        <div className="sidebar-add-icon">
            <GrClose onClick={() => {
                changeAddChannel(false)
            }
            } title='channel-add-btn' />
        </div>
    )
}

export default CloseButton