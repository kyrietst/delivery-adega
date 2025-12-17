import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

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
                        ? 'border-2 border-primary'
                        : 'border border-white/10 bg-white/5'
                    }`}
                style={isActive ? {
                    shadowColor: '#46ec13',
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
                        color="white"
                    />
                </View>
            </View>
            <Text
                className={`text-xs font-medium mt-2 ${isActive ? 'text-primary font-bold' : 'text-white/60'
                    }`}
            >
                {name}
            </Text>
        </TouchableOpacity>
    );
}
