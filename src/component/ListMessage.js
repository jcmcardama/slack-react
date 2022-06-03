const ListMessage = (prop) => {
    const items = prop.data;

    const convertTime24to12 = (time24h) => {
        let time = time24h
            .toString()
            .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];

        if (time.length > 1) {
            time = time.slice(1, -1);
            time[5] = +time[0] < 12 ? ' am' : ' pm';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    };

    return (
        <div className="chat-messages">
            {items.data !== undefined ?
                (
                    items.data.map((item, index, arr) => (
                        <div className="message-item" key={index}>
                            <div className="sender">{((index > 0) && (arr[index - 1]).sender.email === (arr[index]).sender.email) ? (<></>) : (<>{item.sender.email}:</>)}
                            </div>
                            <div className="messageBody">
                                <div className="time">{convertTime24to12(item.created_at.slice(11, -8))}</div>
                                <div>{item.body}</div>
                            </div>
                        </div>
                    ))
                ) : (<></>)}
        </div>
    );
};
export default ListMessage;
