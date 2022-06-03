const ListMessage = (prop) => {
    const items = prop.data;

    return (
        <div>
            {items.data !== undefined ? 
            (
                items.data.map((item,index,arr) => (
                    <div key={index}>
                        <div>{((index > 0) && (arr[index - 1]).sender.email === (arr[index]).sender.email) ? (<></>) : (<>{item.sender.email}:</>)} 
                        </div>{item.created_at.slice(11,-8)} {item.body}
                    </div>
                ))
            ) : (<></>)}
        </div>
    );
};
export default ListMessage;