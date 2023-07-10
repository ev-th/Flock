import { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import CreateEvent from "../components/CreateEvent";

export default function NewEvent() {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [eventName, setEventName] = useState("");

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
    };

    const eventNameInput = text => {
        setEventName(text);
    };

    const submitEvent = () => {
        fetch("https://localhost:8080/event", {
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
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        // console.log(nameList);
    }, [nameList]);

    return (
        <SafeAreaView>
           <CreateEvent name={name} nameInput={nameInput} nameList={nameList} eventName={eventName} removeName={removeName} eventNameInput={eventNameInput} addName={addName}/>
            <View>
                <TouchableOpacity onPress={submitEvent}>
                    <Text>Generate Link</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Link href="/">Choose Activities (next page)</Link>
            </View>
        </SafeAreaView>
    );
}
