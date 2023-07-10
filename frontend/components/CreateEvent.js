import { View, Text, TextInput, TouchableOpacity} from "react-native";
const CreateEvent = ({ name, nameInput, nameList, eventName, removeName, eventNameInput, addName}) => {

    return(
        <>
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
        </>
    )

}

export default CreateEvent;