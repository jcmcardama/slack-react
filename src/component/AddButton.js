import {FiPlus} from 'react-icons/fi'

const AddButton = ({addChannel, changeAddChannel}) => {
    return (
        <div className="sidebar-add-icon">
            <FiPlus onClick={() => {
                changeAddChannel(true)
            }
                } title='channel-add-btn' />
        </div>
    )
}

export default AddButton