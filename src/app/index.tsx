import { View, Text, ScrollView, Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";
import BottomNav from "@/components/layout/BottomNav";

export default function Index() {
    const handlePress = (route: string) => {
        Haptics.selectionAsync();
        router.push(route as any);
    };

    return (
        <View className="flex-1 bg-background relative">
            <SafeAreaView edges={["top"]} className="flex-1">
                <ScrollView
                    className="flex-1"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                >
                    {/* Header */}
                    <View className="px-5 pt-6 pb-2 flex-row items-center justify-between">
                        <Pressable
                            onPress={() => handlePress("/loyalty")}
                            className="flex-row items-center gap-3 active:opacity-70"
                        >
                            <View className="relative">
                                <Image
                                    source={{
                                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuARVK7WNQASLKUjKFJdvKkQqmJW0ivLTCgEC9X75dhuHbTyj0I7hPdFDH3ABtnkVrlJvIMWzqJqDaVlEVRQFQ8M_m-PX29eOZ_cjvluuqqgYe04WUEy0W3r1i1WS2U999U2pxu4wi2x3Rlp7gMe7cXdJ6h7yjYFkifLxwV4LjnGvb9wvN_Siviy3fAC9GXPIVtt1U-DXuJXyFLqrygopWSM0Y2Z1iXEb8kRdlOmLg-duDAFMiArBQTRbpMmWMhPeE44Up4wjwCjsuM",
                                    }}
                                    className="w-10 h-10 rounded-full border-2 border-white/10"
                                />
                                <View className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                            </View>
                            <View>
                                <Text className="text-xs text-white/60 font-medium">Boa noite,</Text>
                                <Text className="text-sm font-bold text-white">Gabriel</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => handlePress("/loyalty")}
                            className="flex-row items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 active:opacity-70"
                        >
                            <View className="w-6 h-6 rounded-full bg-yellow-400 items-center justify-center">
                                <MaterialIcons name="emoji-events" size={14} color="#0F0F11" />
                            </View>
                            <View>
                                <Text className="text-[10px] text-white/50 uppercase font-bold leading-none">
                                    PONTOS
                                </Text>
                                <Text className="text-xs font-bold text-white leading-none">2.450</Text>
                            </View>
                        </Pressable>
                    </View>

                    {/* Search Bar */}
                    <View className="px-5 mt-4">
                        <View className="h-14 flex-row items-center rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                            <View className="pl-5 items-center justify-center">
                                <MaterialIcons name="search" size={24} color="#E11D48" />
                            </View>
                            <TextInput
                                className="flex-1 bg-transparent text-white placeholder:text-white/40 px-4 text-base font-medium h-full"
                                placeholder="O que vamos beber hoje?"
                                placeholderTextColor="rgba(255, 255, 255, 0.4)"
                            />
                            <View className="pr-2">
                                <Pressable className="w-10 h-10 items-center justify-center rounded-xl bg-white/5 active:bg-white/10">
                                    <MaterialIcons name="tune" size={20} color="rgba(255, 255, 255, 0.7)" />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    {/* Categories */}
                    <View className="mt-8 px-5">
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 16, paddingBottom: 8 }}
                        >
                            {/* Cervejas - Active */}
                            <Pressable className="flex-col items-center gap-2 w-[76px]">
                                <View className="w-[76px] h-[76px] rounded-full border-2 border-primary p-1">
                                    <View className="w-full h-full rounded-full overflow-hidden bg-black/20 items-center justify-center">
                                        <MaterialIcons name="sports-bar" size={24} color="white" />
                                    </View>
                                </View>
                                <Text className="text-primary text-xs font-bold">Cervejas</Text>
                            </Pressable>

                            {/* Vinhos */}
                            <Pressable className="flex-col items-center gap-2 w-[76px]">
                                <View className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 bg-white/5">
                                    <View className="w-full h-full rounded-full overflow-hidden bg-gray-800 opacity-80 items-center justify-center">
                                        <MaterialIcons name="wine-bar" size={24} color="white" />
                                    </View>
                                </View>
                                <Text className="text-white/60 text-xs font-medium">Vinhos</Text>
                            </Pressable>

                            {/* Destilados */}
                            <Pressable className="flex-col items-center gap-2 w-[76px]">
                                <View className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 bg-white/5">
                                    <View className="w-full h-full rounded-full overflow-hidden bg-gray-800 opacity-80 items-center justify-center">
                                        <MaterialIcons name="local-bar" size={24} color="white" />
                                    </View>
                                </View>
                                <Text className="text-white/60 text-xs font-medium">Destilados</Text>
                            </Pressable>

                            {/* Sem Álcool */}
                            <Pressable className="flex-col items-center gap-2 w-[76px]">
                                <View className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 bg-white/5">
                                    <View className="w-full h-full rounded-full overflow-hidden bg-gray-800 opacity-80 items-center justify-center">
                                        <MaterialIcons name="water-drop" size={24} color="white" />
                                    </View>
                                </View>
                                <Text className="text-white/60 text-xs font-medium">Sem Álcool</Text>
                            </Pressable>
                        </ScrollView>
                    </View>

                    {/* Hero Section */}
                    <View className="px-5 mt-6">
                        <Pressable
                            onPress={() => handlePress("/product-detail")}
                            className="w-full aspect-[4/5] rounded-[32px] overflow-hidden relative active:opacity-95"
                        >
                            <Image
                                source={{
                                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM5guC0IQOrQXmmZPdreRVF_qyu35GJ56z5-bRm5ROSviQLj97Z3oTiMQBb-u8RvnZUL63d3COkxyEGkDdLylefbjK0npILoxtJTIHqfAZuX0rNBZUnUmTnr40RMzq0fq_bQXfYuMBE33RuHQhgqOuik3gEZPtRAo218ZZQMuoMtSucRkrCCS9cZUJeXls10rCSGGr312cYNZxB-XB1OOcWFncnKfsr8bmtTN9IH7X-p4FE4VSQIo1zrkR0gZIsMRhl2p_tONc_64",
                                }}
                                className="absolute inset-0 w-full h-full"
                                resizeMode="cover"
                            />
                            <View className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                            <View className="absolute top-4 right-4">
                                <View className="bg-black/30 border border-white/10 px-3 py-1 rounded-full flex-row items-center gap-1">
                                    <View className="w-2 h-2 rounded-full bg-primary" />
                                    <Text className="text-white text-[10px] font-bold">AO VIVO</Text>
                                </View>
                            </View>

                            <View className="absolute bottom-0 left-0 w-full p-6 flex-col items-start gap-3">
                                <View className="flex-row items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40">
                                    <MaterialIcons name="local-fire-department" size={14} color="#E11D48" />
                                    <Text className="text-xs font-bold text-primary uppercase">Modo Esquenta</Text>
                                </View>
                                <Text className="text-3xl font-extrabold text-white leading-tight">
                                    Comece a noite {"\n"}com energia.
                                </Text>
                                <View className="flex-row items-center justify-between w-full mt-2">
                                    <Text className="text-white/80 text-sm font-medium max-w-[200px]">
                                        Seleção especial de energéticos e destilados.
                                    </Text>
                                    <Pressable className="h-12 w-12 rounded-full bg-primary items-center justify-center active:scale-95">
                                        <MaterialIcons name="arrow-forward" size={24} color="#0F0F11" />
                                    </Pressable>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                    {/* Products Section */}
                    <View className="px-5 mt-10 mb-4 flex-row items-center justify-between">
                        <View>
                            <Text className="text-xl font-bold text-white">Bairro Favoritos</Text>
                            <Text className="text-xs text-white/50">O que seus vizinhos estão pedindo</Text>
                        </View>
                        <Text className="text-xs font-bold text-primary">Ver todos</Text>
                    </View>

                    {/* Products Scroll */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16, paddingHorizontal: 20, paddingBottom: 32 }}
                    >
                        {/* Product Card 1 */}
                        <Pressable onPress={() => handlePress("/product-detail")} className="min-w-[170px]">
                            <View className="rounded-[32px] bg-white/5 border border-white/10 p-3 gap-3 relative">
                                <View className="absolute -top-2 -right-2 bg-[#2a2a2a] border border-white/10 flex-row items-center gap-1 px-2.5 py-1 rounded-full z-10">
                                    <MaterialIcons name="bolt" size={10} color="#E11D48" />
                                    <Text className="text-[10px] font-bold text-white uppercase">Trending</Text>
                                </View>
                                <View className="relative w-full aspect-[4/5] rounded-3xl bg-black/20 overflow-hidden">
                                    <Image
                                        source={{
                                            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ",
                                        }}
                                        className="absolute inset-0 w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                                <View className="px-1 pb-1">
                                    <Text className="font-bold text-white text-base" numberOfLines={1}>
                                        Absolut Vodka
                                    </Text>
                                    <Text className="text-xs text-white/50 mb-3">1L • Destilados</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="font-bold text-lg text-white">R$ 89</Text>
                                        <Pressable
                                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                                            className="w-9 h-9 rounded-full bg-white/10 items-center justify-center active:bg-primary active:scale-90"
                                        >
                                            <MaterialIcons name="add" size={20} color="white" />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        {/* Product Card 2 */}
                        <Pressable className="min-w-[170px]">
                            <View className="rounded-[32px] bg-white/5 border border-white/10 p-3 gap-3">
                                <View className="relative w-full aspect-[4/5] rounded-3xl bg-black/20 overflow-hidden">
                                    <Image
                                        source={{
                                            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5402M3dOBBTmuoZcH2QrstjrAwGzT25uitq_5TbbeINQ2ITdaYZDUZrfDhK8XvRbOKj3b_xrLv66P5tBJJVCgkRRbdaolvzgkz5LDD0ZzOb8LlmWZi660uTAYH1sEOoblFGLvUteV_p81rtrJpE_HVeLDWgIr1h3dzWAQYiUGbX-8KsnjqXuoDPEqzVhBXE71Dgf2x-XOuKpNwEylM1PODQJzeQYGgKUQSck7ZWMshkduAD-IVaQ764AcWA0iWyaPpeFHpnQRx0Q",
                                        }}
                                        className="absolute inset-0 w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                                <View className="px-1 pb-1">
                                    <Text className="font-bold text-white text-base" numberOfLines={1}>
                                        Malbec Argentino
                                    </Text>
                                    <Text className="text-xs text-white/50 mb-3">750ml • Vinho Tinto</Text>
                                    <View className="flex-row items-center justify-between">
                                        <Text className="font-bold text-lg text-white">R$ 124</Text>
                                        <Pressable
                                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                                            className="w-9 h-9 rounded-full bg-white/10 items-center justify-center active:bg-primary active:scale-90"
                                        >
                                            <MaterialIcons name="add" size={20} color="white" />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>

            <BottomNav />
        </View>
    );
}
