import RecentDmList from './RecentDmList'

const RecentDirectMessages = () => {
  return (
    <div>
      <h2>Direct Message</h2>
      <RecentDmList />
      {/* <Switch>
        <Route path={`${match.path}/:messageId`}>
          <Messages />
        </Route>
        <Route path={match.path}>
          <Chat />
        </Route>
      </Switch> */}
    </div>
  )
}

export default RecentDirectMessages