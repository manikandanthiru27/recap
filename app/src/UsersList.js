import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native';

function UsersList(props) {
    const [usersData, setUsersData] = useState()
    useEffect(()=>{
        handleAlbums()
    },[])
    const handleAlbums=async()=>{
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(URL)
        setUsersData(response.data)
        console.log(response.data)
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#c1c1c1'}}>
            <StatusBar />
            <Text>Hi folks!!!</Text>
            <FlatList
            data={usersData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return(
                <Text>{item.name}</Text>
                )
            }}
            />
        </SafeAreaView>
    );
}

export default UsersList;