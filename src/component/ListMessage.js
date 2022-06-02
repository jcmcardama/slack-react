const ListMessage = (prop) => {
    const items = prop.data;
    return (
        <div>
            {items.data !== undefined ? 
                (
                    items.data.map((item,index) => (
                    <div key={index}>
                        {item.sender.email} {item.created_at.slice(11,-8)}: {item.body}
                    </div>
                    ))
                ) :
                (<></>)
            }
        </div>
    );
};
export default ListMessage;