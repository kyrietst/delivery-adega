import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "@/components/layout/BottomNav";

export default function LoyaltyScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 items-center justify-center">
                <Text className="text-text-primary text-xl">Loyalty Screen</Text>
                <Text className="text-text-secondary text-sm mt-2">Em construção...</Text>
            </View>
            <BottomNav />
        </SafeAreaView>
    );
}
