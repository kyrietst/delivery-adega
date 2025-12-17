import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { colors } from '@/theme/colors';

interface CategoryPillProps {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    image?: string;
    isActive?: boolean;
    onPress?: () => void;
}

export function CategoryPill({ name, icon, image, isActive = false, onPress }: CategoryPillProps) {
    const handlePress = () => {
        Haptics.selectionAsync();
        onPress?.();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            className="items-center mr-4"
            activeOpacity={0.7}
        >
            <View
                className={`w-[76px] h-[76px] rounded-full p-1 ${isActive
                    ? 'border-2 border-brand'
                    : 'border border-ui-border bg-ui-surface'
                    }`}
                style={isActive ? {
                    shadowColor: colors.brand.DEFAULT,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 5,
                } : undefined}
            >
                <View className="w-full h-full rounded-full overflow-hidden items-center justify-center bg-black/20">
                    {image ? (
                        <>
                            <Image
                                source={{ uri: image }}
                                className="absolute inset-0 w-full h-full"
                                resizeMode="cover"
                            />
                            <View className="absolute inset-0 bg-black/40" />
                        </>
                    ) : null}
                    <MaterialIcons
                        name={icon}
                        size={24}
                        color={colors.text.primary}
                    />
                </View>
            </View>
            <Text
                className={`text-xs font-medium mt-2 ${isActive ? 'text-brand font-bold' : 'text-text-secondary'
                    }`}
            >
                {name}
            </Text>
        </TouchableOpacity>
    );
}
