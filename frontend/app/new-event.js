import { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

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
        console.log("remove names called");
        console.log(nameToRemove);
    };

    const eventNameInput = text => {
        setEventName(text);
    };

    const submitEvent = () => {
        fetch("https://localhost:1066/event", {
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
        console.log(nameList);
    }, [nameList]);

    return (
        <SafeAreaView>
            <View>
                <Text>Create Event</Text>
                <TextInput placeholder="Enter event name" value={eventName} onChangeText={eventNameInput} />
                <TextInput
                    placeholder="Enter name and press enter..."
                    value={name}
                    onChangeText={nameInput}
                    onSubmitEditing={() => {
                        addName();
                    }}
                />
            </View>
            <View>
                {nameList.map(name => (
                    <View key={name}>
                        <Text>{name}</Text>
                        <TouchableOpacity onPress={() => removeName(name)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
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
