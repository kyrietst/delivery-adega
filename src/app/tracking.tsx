import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';

// ====== Mock Driver Data ======
const DRIVER = {
    name: 'Marcos Silva',
    vehicle: 'Honda PCX • LPT-9822',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUmhV6YbAHkCUy4t088jQhhDPblrPNR-frOodgJkqKaW1TJtIamnPgkBxb7HMF7D4doebef73_1GpKLY8UusJkgbm19smF63Z_OkjvOcDs03zBYhXsMgjmN4a7r4ujzccjTyw_cM6oyS0M0-9jxoC2pSz1AdiLEcC0DB86NGQAxiJb4feSdT14lQpsNnQSYQFUAKrcqUT_9o1ghUHWYpY4dO4ZRpBmPAU2PcAaVEUvu9wuxojR5GBaKyyMJPd3ylwpMMxCmAQOdIg',
};
// =============================

export default function TrackingScreen() {
    const router = useRouter();

    const progressPercent = 70;

    return (
        <View className="flex-1 bg-background-dark">
            <StatusBar barStyle="light-content" />

            {/* ===== Map Background ===== */}
            <View className="absolute inset-0 bg-[#0a0f08]">
                <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWIwNTKxWUP_QbJHvZ-imXfslLg-9MWfgVU9JmaGuADgOvSuOrg4XV9mdDPulmWaLBY_yTwOfwZbcaGNLT0tmGgKJUOoZ0yZeNKZmebzMI89zSFrssvY4yz1bCXu0oLRqy5-jlV3ksgCuBFaCRNeURmxkmi5635QVJ7aUKm9pZbRVvmW6_V8utYruaPli1qQUAgisMrCJRgzxldPoUJ9gijIXZY-a0FJWAw5M-jwtGfQ10kDzdMernY4-U6XMIIbCrKfweQvKO4wY' }}
                    className="w-full h-full opacity-60"
                    resizeMode="cover"
                    style={{ filter: 'brightness(0.6) contrast(1.2)' } as never}
                />
                {/* Gradient overlays */}
                <View className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
            </View>

            {/* ===== Top Status Bar ===== */}
            <View className="relative z-10 pt-14 px-4 items-center">
                <SkiaGlassCard
                    className="rounded-full p-1.5 px-2 flex-row items-center justify-between min-w-[320px]"
                    intensity={20}
                >
                    {/* Back Button */}
                    <TouchableOpacity
                        onPress={() => { Haptics.selectionAsync(); router.push('/'); }}
                        className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
                    >
                        <MaterialIcons name="arrow-back" size={20} color="white" />
                    </TouchableOpacity>

                    {/* Status */}
                    <View className="items-center flex-1 px-2">
                        <View className="flex-row items-center gap-1.5">
                            {/* Pulsing Dot */}
                            <View className="relative w-2 h-2">
                                <View className="absolute inset-0 bg-primary rounded-full opacity-75" />
                                <View className="w-2 h-2 bg-primary rounded-full" />
                            </View>
                            <Text className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                In Transit
                            </Text>
                        </View>
                        <Text className="text-sm font-semibold text-white/90">Estimated 12:45 PM</Text>
                    </View>

                    {/* Help Button */}
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
                        onPress={() => Haptics.selectionAsync()}
                    >
                        <MaterialIcons name="help-outline" size={20} color="#9fc992" />
                    </TouchableOpacity>
                </SkiaGlassCard>
            </View>

            {/* ===== Map Content Area ===== */}
            <View className="flex-1 relative">
                {/* Home Marker */}
                <View className="absolute bottom-[30%] right-8 items-center">
                    <SkiaGlassCard className="px-3 py-1 mb-2 rounded-lg" intensity={15}>
                        <Text className="text-[10px] font-bold text-white/80">Home</Text>
                    </SkiaGlassCard>
                    <View className="w-12 h-12 bg-[#1f3319] border-2 border-[#9fc992] rounded-full items-center justify-center">
                        <MaterialIcons name="home" size={24} color="white" />
                    </View>
                </View>

                {/* Delivery Scooter */}
                <View className="absolute top-[25%] left-1/2 -translate-x-1/2 items-center">
                    <View className="relative w-24 h-24">
                        {/* Glow */}
                        <View className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                        {/* Circle */}
                        <View
                            className="w-full h-full bg-[#142210] rounded-full border-[3px] border-primary items-center justify-center overflow-hidden"
                            style={{
                                shadowColor: '#46ec13',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 20,
                            }}
                        >
                            <MaterialIcons name="delivery-dining" size={48} color="#46ec13" />
                        </View>
                    </View>
                    {/* Shadow */}
                    <View className="w-16 h-4 bg-black/50 blur-md rounded-full mt-4" />
                </View>
            </View>

            {/* ===== Bottom Panel ===== */}
            <View className="p-2 pb-6">
                <SkiaGlassCard
                    className="rounded-[40px] p-5 pt-3"
                    intensity={30}
                    tint="rgba(20, 34, 16, 0.7)"
                >
                    {/* Drag Handle */}
                    <View className="w-12 h-1.5 bg-white/20 rounded-full self-center mb-4" />

                    {/* ETA Header */}
                    <View className="flex-row justify-between items-start mb-4">
                        <View>
                            <Text className="text-3xl font-extrabold text-white leading-none">
                                Arriving in{'\n'}
                                <Text
                                    className="text-primary"
                                    style={{
                                        textShadowColor: 'rgba(70, 236, 19, 0.3)',
                                        textShadowOffset: { width: 0, height: 0 },
                                        textShadowRadius: 15,
                                    }}
                                >
                                    12 mins
                                </Text>
                            </Text>
                            <View className="flex-row items-center gap-1 mt-2">
                                <MaterialIcons name="verified" size={14} color="#9fc992" />
                                <Text className="text-[#9fc992] text-sm font-medium">Order picked up</Text>
                            </View>
                        </View>

                        {/* Circular Progress */}
                        <View className="w-14 h-14 items-center justify-center">
                            <View className="absolute w-full h-full rounded-full border-[3px] border-white/10" />
                            <View
                                className="absolute w-full h-full rounded-full border-[3px] border-primary"
                                style={{
                                    borderRightColor: 'transparent',
                                    borderBottomColor: 'transparent',
                                    transform: [{ rotate: '225deg' }],
                                }}
                            />
                            <MaterialIcons name="timer" size={20} color="white" />
                        </View>
                    </View>

                    {/* Progress Bar */}
                    <View className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-5">
                        <View
                            className="h-full bg-primary rounded-full"
                            style={{
                                width: `${progressPercent}%`,
                                shadowColor: '#46ec13',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.8,
                                shadowRadius: 10,
                            }}
                        />
                    </View>

                    {/* Driver Card */}
                    <View className="flex-row items-center gap-4 bg-white/5 p-3 pr-4 rounded-[24px] border border-white/5">
                        {/* Driver Photo */}
                        <View className="relative">
                            <View className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                                <Image
                                    source={{ uri: DRIVER.image }}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>
                            {/* Rating Badge */}
                            <View className="absolute -bottom-1 -right-1 bg-primary px-1.5 py-0.5 rounded-full border border-[#142210] flex-row items-center">
                                <Text className="text-[10px] font-bold text-black">{DRIVER.rating}</Text>
                                <MaterialIcons name="star" size={8} color="#142210" />
                            </View>
                        </View>

                        {/* Driver Info */}
                        <View className="flex-1">
                            <Text className="text-white font-bold text-lg">{DRIVER.name}</Text>
                            <Text className="text-white/50 text-xs">{DRIVER.vehicle}</Text>
                        </View>

                        {/* Action Buttons */}
                        <View className="flex-row gap-2">
                            <TouchableOpacity
                                onPress={() => Haptics.selectionAsync()}
                                className="w-11 h-11 rounded-full bg-white/10 items-center justify-center border border-white/5"
                            >
                                <MaterialIcons name="chat-bubble-outline" size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                                className="w-11 h-11 rounded-full bg-primary items-center justify-center"
                                style={{
                                    shadowColor: '#46ec13',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 10,
                                }}
                            >
                                <MaterialIcons name="call" size={20} color="#142210" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SkiaGlassCard>
            </View>
        </View>
    );
}
