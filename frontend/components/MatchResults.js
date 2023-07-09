import { ScrollView, Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";


export default function MatchResults({ choices }) {
  return (
    <SafeAreaView>
      <Text>Your Matches</Text>
      <ScrollView testID="scroll-view-1">
        {choices.map((match, index) => {
          return <Text testID={"match"} key={index}>{match}</Text>;
        })}
      </ScrollView>
      <Link href="/">Return to create event</Link>
    </SafeAreaView>
  );
}
