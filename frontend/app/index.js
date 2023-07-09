import { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import CreateEvent from "../components/CreateEvent";
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard';

export default function NewEvent() {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [eventName, setEventName] = useState("");
    const [id, setId] = useState("");
    const [link, setLink] = useState("");

    // console.log(Linking.createURL("/event/123"))

    const nameInput = text => {
        setName(text);
    };

    const addName = () => {
        setNameList([...nameList, name]);
        setName("");
    };

    const removeName = nameToRemove => {
        const filteredNames = nameList.filter(name => name !== nameToRemove);
        setNameList(filteredNames);
        console.log("remove names called");
        console.log(nameToRemove);
    };

    const eventNameInput = text => {
        setEventName(text);
    };

    const submitEvent = () => {
        fetch("http://192.168.0.19:8080/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ eventName: eventName, names: nameList }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                // return "id"
                setId(data)
                setLink(Linking.createURL(`/event/${data}`))
            })
            .catch(error => {
                console.error(error);
            });
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(link)
    }

    // useEffect(() => {
    //     console.log(nameList);
    // }, [nameList]);

    return (
        <SafeAreaView>
           <CreateEvent name={name} nameInput={nameInput} nameList={nameList} eventName={eventName} removeName={removeName} eventNameInput={eventNameInput} addName={addName}/>
            <View>
                <TouchableOpacity onPress={submitEvent}>
                    <Text>Generate Link</Text>
                </TouchableOpacity>
                <Text>{`Your link is: ${link}`}</Text>
                
                <TouchableOpacity onPress={copyToClipboard}>
                    <Text>Copy</Text>
                </TouchableOpacity>
                
            </View>
            <View>
                <Link href="/event-chooser">Choose Activities (next page)</Link>
            </View>
            <Link href={`/event/${id}`}>Test - Go to Link from within App</Link>
        </SafeAreaView>
    );
}
