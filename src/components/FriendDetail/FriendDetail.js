import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            {/* <h1>This is Friend Detail: {friendId}</h1> */}
            <h2>The name is : {friend.name}</h2>
            <h2>Email : {friend.email}</h2>
            <h2> Website : {friend.website}</h2>
        </div>
    );
};

export default FriendDetail;