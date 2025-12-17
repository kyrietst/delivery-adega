import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { SkiaBlurGlow } from '@/components/ui/SkiaBlurGlow';

export default function ProductDetailScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [quantity, setQuantity] = useState(1);

    // Float animation for badge
    const translateY = useSharedValue(0);

    useEffect(() => {
        translateY.value = withRepeat(
            withTiming(-8, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
            -1,
            true
        );
    }, []);

    const floatStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: translateY.value },
            { rotate: '12deg' },
        ],
    }));

    const product = {
        id: params.id,
        name: params.name as string || 'Malbec Argentino',
        image: params.image as string || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5402M3dOBBTmuoZcH2QrstjrAwGzT25uitq_5TbbeINQ2ITdaYZDUZrfDhK8XvRbOKj3b_xrLv66P5tBJJVCgkRRbdaolvzgkz5LDD0ZzOb8LlmWZi660uTAYH1sEOoblFGLvUteV_p81rtrJpE_HVeLDWgIr1h3dzWAQYiUGbX-8KsnjqXuoDPEqzVhBXE71Dgf2x-XOuKpNwEylM1PODQJzeQYGgKUQSck7ZWMshkduAD-IVaQ764AcWA0iWyaPpeFHpnQRx0Q',
        price: params.price as string || 'R$ 124',
        grape: params.grape as string || 'Catena Zapata',
        rating: params.rating as string || '4.8',
        description: params.description as string || 'A rich and immersive experience with deep violet hues. The nose offers intense aromas of blackberries and dark chocolate, with a hint of spicy black pepper.',
    };

    const handleBack = () => {
        Haptics.selectionAsync();
        router.back();
    };

    const adjustQuantity = (delta: number) => {
        Haptics.selectionAsync();
        setQuantity(Math.max(1, quantity + delta));
    };

    const handleAddToCart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        router.push('/cart');
    };

    // Product attributes/tags
    const tags = [
        { icon: 'eco' as const, label: 'Organic' },
        { icon: 'verified' as const, label: 'Verified' },
        { icon: 'wine-bar' as const, label: 'Full Body' },
    ];

    // Stats grid
    const stats = [
        { icon: 'water-drop' as const, label: 'ABV', value: '14.5%' },
        { icon: 'place' as const, label: 'Origin', value: 'Mendoza' },
        { icon: 'calendar-today' as const, label: 'Year', value: '2019' },
    ];

    return (
        <View className="flex-1 bg-ui-bg">
            <StatusBar barStyle="light-content" />

            {/* ===== AMBIENT BACKGROUND GLOW ===== */}
            {/* Top gradient */}
            <LinearGradient
                colors={['#2c4823', '#1a2d15', '#142210']}
                locations={[0, 0.4, 0.8]}
                className="absolute top-0 left-0 right-0 h-[60%]"
            />

            {/* Soft diffused glow using Skia blur */}
            <SkiaBlurGlow
                color="rgba(70, 236, 19, 0.3)"
                blur={100}
                size={250}
                offsetY={-80}
            />

            {/* ===== Top Navigation ===== */}
            <View className="absolute top-0 left-0 right-0 z-50 px-5 pt-14 flex-row justify-between items-center">
                <TouchableOpacity
                    onPress={handleBack}
                    className="w-12 h-12 rounded-full bg-white/5 items-center justify-center border border-white/10"
                >
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <View className="flex-row gap-3">
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full bg-white/5 items-center justify-center border border-white/10"
                        onPress={() => Haptics.selectionAsync()}
                    >
                        <MaterialIcons name="ios-share" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full bg-white/5 items-center justify-center border border-white/10"
                        onPress={() => Haptics.selectionAsync()}
                    >
                        <MaterialIcons name="favorite" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* ===== Scrollable Content ===== */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Product Image Section */}
                <View className="w-full h-[55vh] min-h-[400px] items-center justify-center pt-20">
                    {/* Floating Points Badge with animation */}
                    <Animated.View
                        className="absolute top-32 right-6 z-10"
                        style={floatStyle}
                    >
                        <View
                            className="px-4 py-3 rounded-2xl items-center bg-background-dark/60 border border-white/10"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 8 },
                                shadowOpacity: 0.4,
                                shadowRadius: 16,
                                elevation: 10,
                            }}
                        >
                            <Text className="text-brand font-extrabold text-xl leading-none">98</Text>
                            <Text className="text-[9px] uppercase tracking-widest font-bold text-white/80">Points</Text>
                        </View>
                    </Animated.View>

                    {/* Product Image with drop shadow */}
                    <Image
                        source={{ uri: product.image }}
                        className="w-[65%] h-[85%]"
                        resizeMode="contain"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 35 },
                            shadowOpacity: 0.6,
                            shadowRadius: 60,
                        }}
                    />
                </View>

                {/* Glass Specs Sheet */}
                <View className="-mt-4 px-3">
                    <View
                        className="rounded-t-[40px] rounded-b-[40px] p-6 pb-8 bg-background-dark/60 border border-white/10"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: -8 },
                            shadowOpacity: 0.3,
                            shadowRadius: 20,
                        }}
                    >
                        {/* Drag Handle */}
                        <View className="w-12 h-1.5 bg-white/20 rounded-full self-center mb-6" />

                        {/* Header: Brand + Price */}
                        <View className="flex-row justify-between items-start mb-6">
                            <View className="flex-1 mr-4">
                                <Text className="text-brand text-xs font-bold tracking-[3px] uppercase mb-1">
                                    {product.grape}
                                </Text>
                                <Text className="text-white text-3xl font-bold leading-tight">
                                    {product.name}
                                </Text>
                            </View>
                            <View className="items-end">
                                <View className="flex-row items-start">
                                    <Text className="text-primary text-lg font-bold mt-1">$</Text>
                                    <Text
                                        className="text-primary text-4xl font-bold tracking-tighter"
                                        style={{
                                            textShadowColor: 'rgba(70, 236, 19, 0.3)',
                                            textShadowOffset: { width: 0, height: 0 },
                                            textShadowRadius: 15,
                                        }}
                                    >
                                        124
                                    </Text>
                                </View>
                                <Text className="text-gray-400 text-xs mt-1">per bottle</Text>
                            </View>
                        </View>

                        {/* Tags */}
                        <View className="flex-row flex-wrap gap-2 mb-8">
                            {tags.map((tag) => (
                                <View
                                    key={tag.label}
                                    className="flex-row items-center px-4 py-2 rounded-full bg-white/5 border border-white/10"
                                >
                                    <MaterialIcons name={tag.icon} size={16} color="#46ec13" />
                                    <Text className="text-xs font-semibold text-gray-200 ml-2">{tag.label}</Text>
                                </View>
                            ))}
                        </View>

                        {/* Tasting Notes */}
                        <View className="mb-8">
                            <Text className="text-lg font-bold text-white mb-3">Tasting Notes</Text>
                            <Text className="text-gray-300 text-sm leading-7 opacity-90">
                                {product.description}
                            </Text>
                        </View>

                        {/* Stats Grid */}
                        <View className="flex-row gap-3 mb-4">
                            {stats.map((stat) => (
                                <View
                                    key={stat.label}
                                    className="flex-1 bg-white/5 rounded-3xl p-4 items-center border border-white/5"
                                >
                                    <View className="w-8 h-8 rounded-full bg-white/5 items-center justify-center mb-2">
                                        <MaterialIcons name={stat.icon} size={18} color="#46ec13" />
                                    </View>
                                    <Text className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">
                                        {stat.label}
                                    </Text>
                                    <Text className="font-bold text-sm text-white">{stat.value}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* ===== Sticky Action Bar ===== */}
            <View className="absolute bottom-0 left-0 right-0 p-5 pb-8">
                <LinearGradient
                    colors={['transparent', 'rgba(20, 34, 16, 0.95)', '#142210']}
                    locations={[0, 0.3, 1]}
                    className="absolute inset-0 -top-12"
                />

                <View
                    className="flex-row items-center p-2 pr-2.5 rounded-full bg-background-dark/60 border border-white/10"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.8,
                        shadowRadius: 40,
                        elevation: 15,
                    }}
                >
                    {/* Quantity Stepper */}
                    <View className="flex-row items-center gap-4 px-3">
                        <TouchableOpacity
                            onPress={() => adjustQuantity(-1)}
                            className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                        >
                            <MaterialIcons name="remove" size={18} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white font-bold text-xl min-w-[24px] text-center">
                            {quantity}
                        </Text>
                        <TouchableOpacity
                            onPress={() => adjustQuantity(1)}
                            className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                        >
                            <MaterialIcons name="add" size={18} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart Button */}
                    <TouchableOpacity
                        onPress={handleAddToCart}
                        className="flex-1 flex-row items-center justify-center gap-2 bg-primary h-14 rounded-full ml-2"
                        style={{
                            shadowColor: '#46ec13',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.3,
                            shadowRadius: 25,
                            elevation: 8,
                        }}
                    >
                        <Text className="text-background-dark font-extrabold text-base">Add to Cart</Text>
                        <MaterialIcons name="shopping-bag" size={20} color="#142210" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
