import { View, Text, TouchableOpacity } from "react-native";

const FlashCard = ({ nextCard, activities, card, addChoice }) => {
    return (
        <View>
            <TouchableOpacity onPress={nextCard}>
                <Text>No</Text>
            </TouchableOpacity>

            <Text>{activities[card]}</Text>

            <TouchableOpacity
                onPress={() => {
                    addChoice(activities[card]);
                    nextCard();
                }}
            >
                <Text>Yes</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FlashCard;

// style={{ flexDirection: "row", justifyContent: "space-around" }}
