import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import {getDatabase, ref, set, remove, update, child, get} from "firebase/database";
import {useState} from "react";


export default function App() {

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAgn0LRZd95k8sUZVieQdjnx1pGLGPVLCg",
        authDomain: "demofirebase-a6c90.firebaseapp.com",
        projectId: "demofirebase-a6c90",
        storageBucket: "demofirebase-a6c90.appspot.com",
        messagingSenderId: "467751822932",
        databaseURL: "https://demofirebase-a6c90-default-rtdb.asia-southeast1.firebasedatabase.app/",
        appId: "1:467751822932:web:e6047427fa07ae9f78efc1",
        measurementId: "G-P1RPJF9X1L"
    };
    const app = initializeApp(firebaseConfig);
    const [data, setData] = useState([])
    return (<View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <FlatList data={data} style={{flex: 1}} renderItem={({item}) => {
            return (<View>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.sdt}</Text>
                <Button title={'Delete'} onPress={() => {
                }}/>
            </View>)
        }}/>
        <Button title={"THEM"} onPress={() => {
            const db = getDatabase();
            var id = 8843
            var name = "HUY NguyenAAAAA";
            var sdt = "091336479"
            set(ref(db, 'students/' + id), {
                name: name,
                sdt: sdt
            }).then(r => {
                if (r) alert('co loi xay ra')
                else alert('thanh cong!!!')
            });
        }}/>
        <Button title={"SUA"} onPress={() => {
            const db = getDatabase();
            var id = 888
            var name = "HUY fsdfsdfsd";
            var sdt = "091336479"
            set(ref(db, 'students/' + id), {
                name: name,
                sdt: sdt
            }).then(r => {
                if (r) alert('co loi xay ra')
                else alert('thanh cong!!!')
            });
        }}/>
        <Button title={"XOA"} onPress={() => {
            const db = getDatabase();
            var id = 888;
            remove(ref(db, 'students/' + id)).then(r => {
                if (r) alert('co loi xay ra')
                else alert('thanh cong!!!')
            })
        }}/>
        <Button title={"DANH SACH"} onPress={() => {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'students/')).then((snapshot) => {
                if (snapshot.exists()) {
                    var duLieu = [];
                    snapshot.forEach(function (item) {
                        var id = item.key;
                        var name = item.val().name;
                        var sdt = item.val().sdt;

                        duLieu.push({
                            id: id,
                            name: name,
                            sdt: sdt
                        })
                    })
                    alert(duLieu.length)
                    setData(duLieu)
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                alert(error);
            });

        }}/>
        <StatusBar style="auto"/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },
});
