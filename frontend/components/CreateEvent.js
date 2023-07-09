import { View, Text, TextInput, TouchableOpacity} from "react-native";
const CreateEvent = ({ name, nameInput, nameList, eventName, removeName, eventNameInput, addName }) => {

    return(
        <>
        <View>
        <Text>Create Event</Text>
        <TextInput testID={"event-name-text-input"} placeholder="Enter event name" value={eventName} onChangeText={eventNameInput} />
        <TextInput
            testID={"name-text-input"}
            placeholder="Enter name and press enter..."
            value={name}
            onChangeText={nameInput}
            onSubmitEditing={() => {
                addName();
                
            }}
        />
        </View>
        <View testID={"name-list"}>
        {nameList.map(name => (
            <View key={name} testID={"name"}>
                <Text testID={"name-text"}>{name}</Text>
                <TouchableOpacity testID={"remove-name"} onPress={() => removeName(name)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        ))}
        </View>
        </>
    )

}

export default CreateEvent;