import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { colors } from '@/theme/colors';

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
                    colors={['transparent', `${colors.ui.bg}4D`, `${colors.ui.bg}F2`]}
                    locations={[0, 0.4, 1]}
                    className="flex-1 justify-end p-6"
                >
                    {/* Live Badge */}
                    {isLive && (
                        <View className="absolute top-4 right-4 flex-row items-center bg-black/30 px-3 py-1 rounded-full border border-ui-border">
                            <View className="w-2 h-2 rounded-full bg-brand mr-2" />
                            <Text className="text-text-primary text-[10px] font-bold">AO VIVO</Text>
                        </View>
                    )}

                    {/* Content */}
                    <View className="flex-row items-center bg-brand/20 self-start px-3 py-1.5 rounded-full border border-brand/40 mb-3">
                        <MaterialIcons name={badgeIcon} size={14} color={colors.brand.DEFAULT} />
                        <Text className="text-brand text-xs font-bold uppercase tracking-wider ml-2">
                            {badge}
                        </Text>
                    </View>

                    <Text className="text-text-primary text-3xl font-extrabold leading-tight mb-2">
                        {title}
                    </Text>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-text-secondary text-sm font-medium flex-1 mr-4">
                            {subtitle}
                        </Text>
                        <View
                            className="w-12 h-12 rounded-full bg-brand items-center justify-center"
                            style={{
                                shadowColor: colors.brand.DEFAULT,
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 10,
                            }}
                        >
                            <MaterialIcons name="arrow-forward" size={24} color={colors.ui.bg} />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}
