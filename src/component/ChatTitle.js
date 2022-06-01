const ChatTitle = (prop) => {
    const items = prop.data;
    return (
        <div>
            {
                items.data !== undefined ? 
                (
                    <h1>{items.data[0].receiver.name}</h1>
                ) :
                (
                    <h1>Chat Title</h1>
                )
            }
        </div>
    );
};
export default ChatTitle;