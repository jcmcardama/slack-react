import AddChannel from './AddChannel'
import ChannelList from './ChannelList';

const Channels = () => {
    return (
      <div>
        <h2>Channels</h2>
        <AddChannel />
        <ChannelList />
        {/* <Switch>
          <Route path={`${match.path}/:channelId/:messageId`}>
            <Messages />
          </Route>
          <Route path={`${match.path}/:channelId`}>
            <Channels />
          </Route>
        </Switch> */}
      </div>
    );
  };

  export default Channels