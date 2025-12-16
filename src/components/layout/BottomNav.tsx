import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";

export default function BottomNav() {
    const handlePress = (route: string) => {
        Haptics.selectionAsync();
        router.push(route as any);
    };

    return (
        <View className="absolute bottom-0 left-0 right-0">
            <SafeAreaView edges={["bottom"]} className="bg-background-secondary border-t border-glass-stroke">
                <View className="flex-row items-center justify-around px-4 py-2">
                    <Pressable
                        onPress={() => handlePress("/")}
                        className="items-center justify-center flex-1 active:opacity-70"
                    >
                        <MaterialIcons name="home" size={24} color="#E11D48" />
                        <Text className="text-primary text-[10px] font-bold mt-1">Home</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress("/cart")}
                        className="items-center justify-center flex-1 active:opacity-70"
                    >
                        <MaterialIcons name="shopping-cart" size={24} color="#A1A1AA" />
                        <Text className="text-text-secondary text-[10px] font-medium mt-1">Carrinho</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress("/tracking")}
                        className="items-center justify-center flex-1 active:opacity-70"
                    >
                        <MaterialIcons name="local-shipping" size={24} color="#A1A1AA" />
                        <Text className="text-text-secondary text-[10px] font-medium mt-1">Rastrear</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress("/loyalty")}
                        className="items-center justify-center flex-1 active:opacity-70"
                    >
                        <MaterialIcons name="stars" size={24} color="#A1A1AA" />
                        <Text className="text-text-secondary text-[10px] font-medium mt-1">Fidelidade</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    );
}
