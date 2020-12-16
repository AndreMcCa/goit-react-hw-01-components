import Profile from './components/Profile/Profile';
import Friends from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics';
import Transactions from './components/Transactions/Transaction';


import user from './json/user.json';
import friends from './json/friends.json';
import sData from './json/statistical-data.json';
import transactions from './json/transactions.json';


export default function App() {
    return (
        <>
            <div className="sitebar">
            <Profile name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />

            <Friends friends={friends} />

            <Statistics stats={sData} title='Upload stats' />
            </div>
            <div className="transaction-box">
            <Transactions t={transactions} />
            </div>
        </>

    )
}


