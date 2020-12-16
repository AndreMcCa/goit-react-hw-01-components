import PropTypes from 'prop-types';
import s from './FriendList.module.css';


function Friends({friends}) {
    return (
        <ul className={s.items}>
            {friends.map((f) => {
                return (
                    
                    <li key={f.id} className={s.item}>
                        <span className={s.status}  style={{backgroundColor: f.isOnline ? 'green' : 'red'}}></span>
                        <img className={s.avatar} src={f.avatar} alt={f.name} width="48" />
                        <p className={s.name}>{f.name}</p>
                    </li>
                )
            })}
        </ul>

    )
}

Friends.protoTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })),
}

export default Friends;



