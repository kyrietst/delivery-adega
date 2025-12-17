import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';

// ====== Mock Order Data ======
const ORDER_ITEMS = [
    {
        id: '1',
        name: 'Pinot Noir 2018',
        subtitle: 'Vintage Reserve',
        price: '$90.00',
        quantity: 2,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNGYFe7WgZJLFuUsu6FdpS_8HKFL-QfQKGo76xsii4zzG9tNYet1x2rMSvPAYXPx7etX3K5FMvkN-3C-qsPy2qzRL7wRzWMEDXk22YgUw09k1qWfp7Q2Un1qCedV4QCSjjZs5rTvurKtS-q5LFyleqzy5XiSgskhsmW0cpBd6dqoOZhSE6UA-rj1NX5MhjsA9MX_HTo2nQ72WguI-rwIc-CoDcyrIhlvKH9ec0vuhJqf2inXAL6ES7vgUDgGXwDqFNXN6AOM7Bv7M',
    },
    {
        id: '2',
        name: 'Chardonnay',
        subtitle: 'Premium Selection',
        price: '$55.50',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1569919659476-f0852f9cad12?w=400',
    },
];
// =============================

export default function CheckoutScreen() {
    const router = useRouter();

    const handleConfirm = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        router.push('/tracking');
    };

    return (
        <View className="flex-1 bg-[#050505]">
            <StatusBar barStyle="light-content" />

            {/* Background Glows */}
            <View className="absolute -top-[20%] -left-[10%] w-[80%] h-[50%] bg-primary/10 rounded-full blur-3xl" />
            <View className="absolute bottom-[10%] -right-[10%] w-[60%] h-[40%] bg-primary/5 rounded-full blur-3xl" />

            <SafeAreaView className="flex-1" edges={['top']}>
                {/* Header */}
                <SkiaGlassCard
                    className="mx-0 px-6 py-4 flex-row items-center justify-between rounded-b-3xl"
                    intensity={25}
                    tint="rgba(20, 34, 16, 0.6)"
                >
                    <TouchableOpacity
                        onPress={() => { Haptics.selectionAsync(); router.back(); }}
                        className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
                    >
                        <MaterialIcons name="arrow-back-ios-new" size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="text-lg font-extrabold tracking-tight text-white">Confirm Order</Text>
                    <View className="w-10" />
                </SkiaGlassCard>

                <ScrollView
                    contentContainerStyle={{ paddingBottom: 200 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* ETA Badge */}
                    <View className="items-center pt-6 pb-2">
                        <SkiaGlassCard
                            className="px-4 py-1.5 rounded-full flex-row items-center gap-2"
                            intensity={20}
                        >
                            <MaterialIcons name="schedule" size={14} color="#46ec13" />
                            <Text className="text-primary text-sm font-semibold tracking-wide uppercase">
                                Arriving in 35 min
                            </Text>
                        </SkiaGlassCard>
                    </View>

                    {/* Selected Items Carousel */}
                    <View className="mt-6">
                        <Text className="text-sm font-medium text-white/60 px-6 mb-4">Your Selection</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
                        >
                            {ORDER_ITEMS.map((item) => (
                                <SkiaGlassCard
                                    key={item.id}
                                    className="w-64 p-4 rounded-3xl"
                                    intensity={20}
                                    tint="rgba(255, 255, 255, 0.03)"
                                >
                                    {/* Product Image */}
                                    <View className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 mb-3">
                                        <Image
                                            source={{ uri: item.image }}
                                            className="w-full h-full"
                                            resizeMode="cover"
                                        />
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0,0,0,0.8)']}
                                            className="absolute inset-0"
                                        />
                                        {/* Quantity Badge */}
                                        <View className="absolute bottom-3 left-3 bg-primary/90 px-2 py-1 rounded-lg">
                                            <Text className="text-background-dark text-xs font-bold">
                                                x{item.quantity}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Product Info */}
                                    <View className="flex-row justify-between items-end">
                                        <View>
                                            <Text className="text-lg font-bold text-white leading-tight">
                                                {item.name}
                                            </Text>
                                            <Text className="text-white/50 text-xs mt-1">{item.subtitle}</Text>
                                        </View>
                                        <Text className="text-primary font-bold">{item.price}</Text>
                                    </View>
                                </SkiaGlassCard>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Shipping Address */}
                    <View className="px-6 mt-8">
                        <SkiaGlassCard
                            className="p-2 pr-6 rounded-[32px] flex-row items-center gap-4"
                            intensity={15}
                        >
                            {/* Map Thumbnail */}
                            <View className="w-16 h-16 rounded-full overflow-hidden border border-white/10">
                                <View className="w-full h-full bg-primary/20 items-center justify-center">
                                    <MaterialIcons name="location-on" size={24} color="white" />
                                </View>
                            </View>

                            {/* Address */}
                            <View className="flex-1">
                                <Text className="text-xs font-medium text-primary uppercase tracking-wider mb-0.5">
                                    Shipping Address
                                </Text>
                                <Text className="text-base font-bold text-white" numberOfLines={1}>
                                    123 Spatial Ave, Apt 4B
                                </Text>
                            </View>

                            {/* Edit Button */}
                            <TouchableOpacity
                                onPress={() => Haptics.selectionAsync()}
                                className="w-8 h-8 rounded-full bg-white/5 items-center justify-center"
                            >
                                <MaterialIcons name="edit" size={16} color="rgba(255,255,255,0.4)" />
                            </TouchableOpacity>
                        </SkiaGlassCard>
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* Fixed Bottom Section */}
            <View className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-12">
                <LinearGradient
                    colors={['transparent', '#050505', '#050505']}
                    locations={[0, 0.4, 1]}
                    className="absolute inset-0 -top-16"
                />

                {/* Total Amount */}
                <View className="items-center mb-8 relative z-10">
                    <Text className="text-white/50 text-sm font-medium tracking-widest uppercase mb-1">
                        Total Amount
                    </Text>
                    <View className="flex-row items-baseline gap-1">
                        <Text className="text-2xl font-medium text-white/80">$</Text>
                        <Text
                            className="text-5xl font-extrabold text-white tracking-tighter"
                            style={{
                                textShadowColor: 'rgba(255,255,255,0.1)',
                                textShadowOffset: { width: 0, height: 0 },
                                textShadowRadius: 15,
                            }}
                        >
                            145.50
                        </Text>
                    </View>
                </View>

                {/* Slide to Confirm Button */}
                <TouchableOpacity
                    onPress={handleConfirm}
                    activeOpacity={0.95}
                    className="relative h-[72px] w-full rounded-full bg-white/5 border border-white/10 overflow-hidden"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.4,
                        shadowRadius: 20,
                        elevation: 15,
                    }}
                >
                    {/* Center Text */}
                    <View className="absolute inset-0 items-center justify-center">
                        <Text className="text-white/30 font-semibold text-lg tracking-wide">
                            Slide to confirm
                        </Text>
                    </View>

                    {/* Slider Handle */}
                    <View
                        className="absolute left-1.5 top-1.5 bottom-1.5 aspect-square rounded-full bg-primary items-center justify-center"
                        style={{
                            shadowColor: '#46ec13',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.5,
                            shadowRadius: 20,
                        }}
                    >
                        <MaterialIcons name="handshake" size={28} color="#142210" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
