import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';

// ====== Mock Data ======
const STATS = [
    { icon: 'local-fire-department' as const, label: 'Current Streak', value: '7 Days', color: '#FF4500' },
    { icon: 'wine-bar' as const, label: 'Total Points', value: '1,450', color: '#46ec13' },
];

const MISSIONS = [
    {
        id: '1',
        title: 'The Red Collection',
        description: 'Order 3 different red wines',
        progress: 66, // 2/3
        progressText: '2/3',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXaZ92--l3tfGYOdkFXi3fXVlsnvYWCinIbgdFAjoZIMDkMr5bW_MB26H-AzJfLk1THaSXkfqcDqBO-nFF6SdS1cPW7pVXRgHWIJ0tgKlyKCuw25_c2QRMEUJoVIJs9zEhMG8J70E2zPKnINw4YyhmGB_mZhUjXIcjJjHfQQ8rgtqCBmZZz6kFHIEgD0BQ8VvZ4pC_Rz38qFTmjMt6yHwAQuxRDjNLio2J9YxwNz6yEWHJwsAEABMKZwOBruc-El-U5gEblTxL8IA',
    },
    {
        id: '2',
        title: 'Weekend Warrior',
        description: 'Order on 3 consecutive weekends',
        progress: 33, // 1/3
        progressText: '1/3',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
    },
];
// =======================

export default function LoyaltyScreen() {
    const router = useRouter();

    const levelProgress = 75; // 75% to next level

    return (
        <View className="flex-1 bg-background-dark">
            <StatusBar barStyle="light-content" />

            {/* Background Effects */}
            <View className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[#1f3a16] opacity-60 blur-3xl" />
            <View className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-background-dark" />

            <SafeAreaView className="flex-1" edges={['top']}>
                {/* Header */}
                <SkiaGlassCard
                    className="mx-0 px-4 pt-2 pb-2 flex-row items-center justify-between rounded-b-3xl mb-4"
                    intensity={25}
                    tint="rgba(20, 34, 16, 0.6)"
                >
                    <TouchableOpacity
                        onPress={() => { Haptics.selectionAsync(); router.back(); }}
                        className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
                    >
                        <MaterialIcons name="arrow-back" size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="text-base font-bold text-white/90 uppercase tracking-wide">
                        Loyalty Dashboard
                    </Text>
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
                        onPress={() => Haptics.selectionAsync()}
                    >
                        <MaterialIcons name="help-outline" size={20} color="#46ec13" />
                    </TouchableOpacity>
                </SkiaGlassCard>

                <ScrollView
                    contentContainerStyle={{ paddingBottom: 120 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Title Section */}
                    <View className="items-center px-4 mb-2">
                        <Text className="text-white text-3xl font-bold tracking-tight text-center mb-1">
                            Your Sommelier Journey
                        </Text>
                        <View className="flex-row items-center gap-2">
                            <MaterialIcons name="stars" size={14} color="#46ec13" />
                            <Text className="text-primary text-sm font-semibold tracking-wide uppercase">
                                Level 5 • Grand Cru Member
                            </Text>
                        </View>
                    </View>

                    {/* Wine Glass Progress */}
                    <View className="items-center mb-6">
                        <View className="relative w-64 h-80">
                            {/* Wine Glass Container */}
                            <View
                                className="absolute inset-0 rounded-[48px] border border-white/20 overflow-hidden"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    shadowColor: '#46ec13',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 50,
                                }}
                            >
                                {/* Light Reflections */}
                                <View className="absolute top-4 left-4 w-2 h-20 bg-white/40 rounded-full opacity-50" />
                                <View className="absolute top-4 right-6 w-1 h-10 bg-white/30 rounded-full opacity-30" />

                                {/* Wine Fill */}
                                <View
                                    className="absolute bottom-0 left-0 right-0 bg-primary/30"
                                    style={{
                                        height: `${levelProgress}%`,
                                    }}
                                >
                                    {/* Surface highlight */}
                                    <View className="absolute top-0 left-0 right-0 h-4 bg-primary/40 blur-sm -translate-y-1/2" />
                                    {/* Gradient fill */}
                                    <View className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent" />

                                    {/* Bubbles */}
                                    <View className="absolute left-[20%] bottom-4 w-2 h-2 bg-primary/40 rounded-full" />
                                    <View className="absolute left-[60%] bottom-10 w-3 h-3 bg-primary/40 rounded-full" />
                                    <View className="absolute left-[40%] bottom-20 w-1 h-1 bg-primary/40 rounded-full" />
                                </View>

                                {/* Center Text */}
                                <View className="absolute inset-0 items-center justify-center">
                                    <Text
                                        className="text-5xl font-bold text-white"
                                        style={{
                                            textShadowColor: 'rgba(0,0,0,0.5)',
                                            textShadowOffset: { width: 0, height: 2 },
                                            textShadowRadius: 10,
                                        }}
                                    >
                                        {levelProgress}%
                                    </Text>
                                    <Text className="text-xs font-medium text-white/80 uppercase tracking-widest mt-1">
                                        to Vintage Collection
                                    </Text>
                                </View>
                            </View>

                            {/* Background Glow */}
                            <View className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary blur-[80px] opacity-20 -z-10" />
                        </View>
                    </View>

                    {/* Stats Grid */}
                    <View className="px-4 mb-8">
                        <View className="flex-row gap-3">
                            {STATS.map((stat) => (
                                <SkiaGlassCard
                                    key={stat.label}
                                    className="flex-1 p-4 rounded-2xl"
                                    intensity={15}
                                >
                                    <View
                                        className="w-10 h-10 rounded-full items-center justify-center mb-3"
                                        style={{ backgroundColor: `${stat.color}20` }}
                                    >
                                        <MaterialIcons name={stat.icon} size={20} color={stat.color} />
                                    </View>
                                    <Text className="text-white/60 text-xs font-medium uppercase tracking-wide">
                                        {stat.label}
                                    </Text>
                                    <Text className="text-white text-xl font-bold">{stat.value}</Text>
                                </SkiaGlassCard>
                            ))}
                        </View>
                    </View>

                    {/* Active Missions */}
                    <View className="px-4">
                        <View className="flex-row items-center justify-between mb-4">
                            <Text className="text-white text-lg font-bold">Active Missions</Text>
                            <TouchableOpacity onPress={() => Haptics.selectionAsync()}>
                                <Text className="text-xs text-primary font-bold">View All</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="gap-3">
                            {MISSIONS.map((mission) => (
                                <SkiaGlassCard
                                    key={mission.id}
                                    className="p-4 rounded-3xl"
                                    intensity={15}
                                >
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-4 flex-1">
                                            {/* Mission Image */}
                                            <View className="w-12 h-12 rounded-2xl overflow-hidden">
                                                <Image
                                                    source={{ uri: mission.image }}
                                                    className="w-full h-full opacity-80"
                                                    resizeMode="cover"
                                                />
                                                <View className="absolute inset-0 bg-black/20" />
                                            </View>

                                            {/* Mission Info */}
                                            <View className="flex-1">
                                                <Text className="text-white font-bold text-base leading-tight">
                                                    {mission.title}
                                                </Text>
                                                <Text className="text-white/50 text-xs mt-1">
                                                    {mission.description}
                                                </Text>
                                            </View>
                                        </View>

                                        {/* Circular Progress */}
                                        <View className="w-10 h-10 items-center justify-center">
                                            <View className="absolute w-full h-full rounded-full border-[3px] border-white/10" />
                                            <View
                                                className="absolute w-full h-full rounded-full border-[3px] border-primary"
                                                style={{
                                                    borderRightColor: mission.progress < 50 ? 'transparent' : undefined,
                                                    borderBottomColor: mission.progress < 75 ? 'transparent' : undefined,
                                                    transform: [{ rotate: '-90deg' }],
                                                }}
                                            />
                                            <Text className="text-[10px] font-bold text-white">
                                                {mission.progressText}
                                            </Text>
                                        </View>
                                    </View>
                                </SkiaGlassCard>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* Fixed Bottom CTA */}
            <View className="absolute bottom-6 left-4 right-4">
                <SkiaGlassCard
                    className="rounded-full p-2 pl-6 flex-row items-center justify-between bg-[#0a1108]"
                    intensity={25}
                >
                    <View className="flex-row items-center gap-3">
                        {/* Pulsing Dot */}
                        <View className="relative w-3 h-3">
                            <View className="absolute inset-0 bg-primary rounded-full opacity-75" />
                            <View className="w-3 h-3 bg-primary rounded-full" />
                        </View>
                        <Text className="text-white text-sm font-semibold">2 Rewards Available</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                        className="flex-row items-center gap-2 bg-primary px-6 py-3 rounded-full"
                        style={{
                            shadowColor: '#46ec13',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.4,
                            shadowRadius: 15,
                        }}
                    >
                        <Text className="text-background-dark font-bold">Claim</Text>
                        <MaterialIcons name="arrow-forward" size={18} color="#142210" />
                    </TouchableOpacity>
                </SkiaGlassCard>
            </View>
        </View>
    );
}
