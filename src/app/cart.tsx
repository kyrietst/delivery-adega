import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { ScreenWrapper } from '@/components/layout/ScreenWrapper';
import { FreeShippingProgress } from '@/components/ui/FreeShippingProgress';

// ====== Mock Cart Items ======
const CART_ITEMS = [
    {
        id: '1',
        name: 'Vinho Tinto Malbec',
        volume: '750ml',
        price: 45.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEnkFAfHBy_Cue8w-cgBP9apdR0wmtqC3i6Rb1dXxxOGO8ocFnAN_RqrxDvDbKASgnEDohAsW3Vhqv7N3X0muEtf2IaCLUKvgBTDfmF2OzvuT-UTyo5fCksJL_Ovz5WIouZVJePQpgeJ3BBpT_DbnGczwHd9-ayjbHS_DgKXE74T7ebJx5Ac8NkjHU2FUKsAFv1ezrhryTSVN9RbuJwrfKothb_T98JyI84z9iOPPfWlp7Q9XmUZWNwriXVM3aTxA6K_eoAB4FqjM',
    },
    {
        id: '2',
        name: 'Absolut Vodka',
        volume: '1L',
        price: 89.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ',
    },
];

const UPSELL_ITEMS = [
    { id: 'u1', name: 'Batata Chips', price: 'R$ 8,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsqiuPg30mD1GqQ9uH9ZlE6ZnScmCl213puTCd3tOG6XTPdMjgTsIZHFHVOzQDA7TZ2hUKEGWOdTaAmE7MtBdYLmACJZF71S4ZDdEW8NHK8O_bHjwvOqjbvD0vgSk5lZ2utaZJ79O9F1OAlom7cg-W2sE_KG3YpJcit9yoLwHYgKLT5pPZ1D9EDeIxjgmuAhZQeF3pMHw4EIBNvXS5GJcrb6RnBND6ayL3bYZm57tkCxD323FmbH2L2GHy6s2RI7zY4720Py9-HUU' },
    { id: 'u2', name: 'Água Com Gás', price: 'R$ 5,00', image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400' },
    { id: 'u3', name: 'Amendoim', price: 'R$ 12,00', image: 'https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=400' },
];
// =============================

export default function CartScreen() {
    const router = useRouter();
    const [items, setItems] = useState(CART_ITEMS);

    const updateQuantity = (id: string, delta: number) => {
        Haptics.selectionAsync();
        setItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const freeShippingTarget = 100;
    const deliveryFee = subtotal >= freeShippingTarget ? 0 : 10;
    const total = subtotal + deliveryFee;

    const handleCheckout = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        router.push('/checkout');
    };

    return (
        <ScreenWrapper withGlow={true} edges={['top']}>
            {/* Header - Glass Panel */}
            <View className="px-4 py-3 flex-row items-center justify-between bg-ui-bg/60 border-b border-ui-border">
                <TouchableOpacity
                    onPress={() => { Haptics.selectionAsync(); router.back(); }}
                    className="w-10 h-10 rounded-full items-center justify-center"
                >
                    <MaterialIcons name="arrow-back-ios-new" size={20} color="white" />
                </TouchableOpacity>
                <Text className="text-base font-bold text-text-primary/90">Seu Carrinho</Text>
                <View className="w-10 items-center">
                    <Text className="text-sm font-semibold text-brand">{items.length}</Text>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={{ paddingBottom: 200 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Free Shipping Progress */}
                <View className="px-4 py-6">
                    <FreeShippingProgress
                        currentValue={subtotal}
                        targetValue={freeShippingTarget}
                    />
                </View>

                {/* Cart Items */}
                <View className="px-4 gap-4">
                    {items.map((item) => (
                        <View
                            key={item.id}
                            className="p-3 rounded-2xl bg-ui-bg/60 border border-ui-border"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 8 },
                                shadowOpacity: 0.2,
                                shadowRadius: 16,
                                elevation: 5,
                            }}
                        >
                            <View className="flex-row items-center gap-4">
                                {/* Product Image */}
                                <View className="w-20 h-20 rounded-xl overflow-hidden bg-black/20">
                                    <Image
                                        source={{ uri: item.image }}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>

                                {/* Product Info */}
                                <View className="flex-1">
                                    <Text className="text-text-primary text-base font-bold" numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                    <Text className="text-text-muted text-xs">{item.volume}</Text>
                                    <Text className="text-brand font-mono font-medium mt-1">
                                        R$ {item.price.toFixed(2).replace('.', ',')}
                                    </Text>
                                </View>

                                {/* Quantity Controls */}
                                <View className="flex-row items-center bg-black/30 rounded-full p-1 border border-ui-border">
                                    <TouchableOpacity
                                        onPress={() => updateQuantity(item.id, -1)}
                                        className="w-8 h-8 rounded-full bg-ui-surface items-center justify-center"
                                    >
                                        <MaterialIcons name="remove" size={14} color="white" />
                                    </TouchableOpacity>
                                    <Text className="w-8 text-center font-mono text-sm font-bold text-text-primary">
                                        {item.quantity}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => updateQuantity(item.id, 1)}
                                        className="w-8 h-8 rounded-full bg-brand items-center justify-center"
                                        style={{
                                            shadowColor: '#46ec13',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 8,
                                        }}
                                    >
                                        <MaterialIcons name="add" size={14} color="#142210" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Upsell Section */}
                <View className="mt-8">
                    <View className="flex-row items-center gap-2 px-4 mb-4">
                        <MaterialIcons name="bolt" size={18} color="#46ec13" />
                        <Text className="text-lg font-bold text-text-primary">Complete seu pedido</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                    >
                        {UPSELL_ITEMS.map((item) => (
                            <View
                                key={item.id}
                                className="w-[140px] p-3 rounded-2xl mr-4 bg-ui-bg/60 border border-ui-border"
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 8 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 16,
                                }}
                            >
                                <View className="aspect-square rounded-xl bg-black/20 overflow-hidden mb-3">
                                    <Image
                                        source={{ uri: item.image }}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                                <Text className="text-sm font-bold text-text-primary leading-tight" numberOfLines={1}>
                                    {item.name}
                                </Text>
                                <Text className="text-xs text-brand font-mono mb-3">{item.price}</Text>
                                <TouchableOpacity
                                    onPress={() => Haptics.selectionAsync()}
                                    className="w-full py-2 rounded-full bg-ui-surface items-center border border-ui-border"
                                >
                                    <Text className="text-xs font-bold text-text-primary">Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            {/* Fixed Checkout Footer */}
            <View className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4">
                <LinearGradient
                    colors={['transparent', 'rgba(20, 34, 16, 0.95)', '#142210']}
                    locations={[0, 0.3, 1]}
                    className="absolute inset-0 -top-12"
                />

                <View className="relative max-w-lg mx-auto w-full gap-4">
                    {/* Price Summary */}
                    <View className="gap-1 px-2">
                        <View className="flex-row justify-between">
                            <Text className="text-sm text-text-secondary">Subtotal</Text>
                            <Text className="text-sm font-mono text-text-secondary">
                                R$ {subtotal.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-sm text-text-secondary">Entrega</Text>
                            <Text className={`text-sm font-mono ${deliveryFee === 0 ? 'text-brand' : 'text-text-secondary'}`}>
                                {deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                            </Text>
                        </View>
                        <View className="flex-row justify-between mt-1">
                            <Text className="text-lg font-bold text-text-primary">Total</Text>
                            <Text className="text-lg font-mono font-bold text-text-primary">
                                R$ {total.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                    </View>

                    {/* Checkout Button */}
                    <TouchableOpacity
                        onPress={handleCheckout}
                        className="relative h-14 rounded-full bg-ui-surface overflow-hidden flex-row items-center p-1 border border-ui-border"
                        activeOpacity={0.95}
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.3,
                            shadowRadius: 20,
                            elevation: 10,
                        }}
                    >
                        <View
                            className="h-12 w-12 rounded-full bg-brand items-center justify-center"
                            style={{
                                shadowColor: '#46ec13',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 10,
                            }}
                        >
                            <MaterialIcons name="arrow-forward" size={24} color="#142210" />
                        </View>
                        <View className="flex-1 items-center pr-4">
                            <Text className="text-text-primary font-bold tracking-wide">Ir para Pagamento</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
}
