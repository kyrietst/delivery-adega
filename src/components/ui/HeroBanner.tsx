import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

interface HeroBannerProps {
    title: string;
    subtitle: string;
    badge: string;
    badgeIcon?: keyof typeof MaterialIcons.glyphMap;
    imageUrl: string;
    onPress?: () => void;
    isLive?: boolean;
}

export function HeroBanner({
    title,
    subtitle,
    badge,
    badgeIcon = 'local-fire-department',
    imageUrl,
    onPress,
    isLive = false,
}: HeroBannerProps) {
    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.95}
            className="w-full aspect-[4/5] rounded-[32px] overflow-hidden"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 16,
                elevation: 10,
            }}
        >
            <ImageBackground
                source={{ uri: imageUrl }}
                className="flex-1"
                resizeMode="cover"
            >
                {/* Gradient Overlay */}
                <LinearGradient
                    colors={['transparent', 'rgba(20, 34, 16, 0.3)', 'rgba(20, 34, 16, 0.95)']}
                    locations={[0, 0.4, 1]}
                    className="flex-1 justify-end p-6"
                >
                    {/* Live Badge */}
                    {isLive && (
                        <View className="absolute top-4 right-4 flex-row items-center bg-black/30 px-3 py-1 rounded-full border border-white/10">
                            <View className="w-2 h-2 rounded-full bg-primary mr-2" />
                            <Text className="text-white text-[10px] font-bold">AO VIVO</Text>
                        </View>
                    )}

                    {/* Content */}
                    <View className="flex-row items-center bg-primary/20 self-start px-3 py-1.5 rounded-full border border-primary/40 mb-3">
                        <MaterialIcons name={badgeIcon} size={14} color="#46ec13" />
                        <Text className="text-primary text-xs font-bold uppercase tracking-wider ml-2">
                            {badge}
                        </Text>
                    </View>

                    <Text className="text-white text-3xl font-extrabold leading-tight mb-2">
                        {title}
                    </Text>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white/80 text-sm font-medium flex-1 mr-4">
                            {subtitle}
                        </Text>
                        <View
                            className="w-12 h-12 rounded-full bg-primary items-center justify-center"
                            style={{
                                shadowColor: '#46ec13',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 10,
                            }}
                        >
                            <MaterialIcons name="arrow-forward" size={24} color="#142210" />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}
