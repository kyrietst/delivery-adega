import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { SkiaGlassCard } from './SkiaGlassCard';

interface ProductCardProps {
    id: string | number;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    rating?: number;
    isTrending?: boolean;
    onPress?: () => void;
    onAddToCart?: () => void;
}

export function ProductCard({
    name,
    category,
    price,
    imageUrl,
    rating,
    isTrending = false,
    onPress,
    onAddToCart,
}: ProductCardProps) {
    const handlePress = () => {
        Haptics.selectionAsync();
        onPress?.();
    };

    const handleAddToCart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onAddToCart?.();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.9}
            className="w-[170px] mr-4"
        >
            <SkiaGlassCard
                className="p-3 rounded-[24px]"
                intensity={15}
                tint="rgba(255, 255, 255, 0.05)"
            >
                {/* Trending Badge */}
                {isTrending && (
                    <View
                        className="absolute -top-2 -right-2 z-10 flex-row items-center bg-[#2a2a2a] px-2.5 py-1 rounded-full border border-white/10"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 8,
                            elevation: 5,
                        }}
                    >
                        <MaterialIcons name="bolt" size={10} color="#46ec13" />
                        <Text className="text-[10px] font-bold text-white uppercase ml-1">
                            Trending
                        </Text>
                    </View>
                )}

                {/* Product Image */}
                <View className="w-full aspect-[4/5] rounded-[20px] bg-black/20 overflow-hidden mb-3">
                    <Image
                        source={{ uri: imageUrl }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                {/* Product Info */}
                <View className="px-1 pb-1">
                    <Text className="text-white font-bold text-base" numberOfLines={1}>
                        {name}
                    </Text>
                    <Text className="text-white/50 text-xs mb-3">
                        {category}
                    </Text>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white font-bold text-lg">{price}</Text>
                        <TouchableOpacity
                            onPress={handleAddToCart}
                            className="w-9 h-9 rounded-full bg-white/10 items-center justify-center"
                            activeOpacity={0.7}
                        >
                            <MaterialIcons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SkiaGlassCard>
        </TouchableOpacity>
    );
}
