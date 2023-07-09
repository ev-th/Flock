import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const FlashCard = ({ nextCard, activities, card, addChoice }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity onPress={nextCard}>
                <Icon name="closecircle" />
            </TouchableOpacity>

            <Text>{activities[card]}</Text>

            <TouchableOpacity
                onPress={() => {
                    addChoice(activities[card]);
                    nextCard();
                }}
            >
                <Icon name="checkcircle" />
            </TouchableOpacity>
        </View>
    );
};

export default FlashCard;
