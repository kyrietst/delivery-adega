import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';
import { CategoryPill } from '@/components/ui/CategoryPill';
import { HeroBanner } from '@/components/ui/HeroBanner';
import { ProductCard } from '@/components/ui/ProductCard';
import { FloatingNavbar } from '@/components/layout/FloatingNavbar';
import { SkiaBlurGlow } from '@/components/ui/SkiaBlurGlow';

// ====== Dados Simulados do Protótipo HTML ======
const CATEGORIES = [
    { id: '1', name: 'Cervejas', icon: 'sports-bar' as const, isActive: true },
    { id: '2', name: 'Vinhos', icon: 'wine-bar' as const },
    { id: '3', name: 'Destilados', icon: 'local-bar' as const },
    { id: '4', name: 'Sem Álcool', icon: 'water-drop' as const },
];

const FEATURED_PRODUCTS = [
    {
        id: '1',
        name: 'Absolut Vodka',
        category: '1L • Destilados',
        price: 'R$ 89',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ',
        isTrending: true,
    },
    {
        id: '2',
        name: 'Malbec Argentino',
        category: '750ml • Vinho Tinto',
        price: 'R$ 124',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5402M3dOBBTmuoZcH2QrstjrAwGzT25uitq_5TbbeINQ2ITdaYZDUZrfDhK8XvRbOKj3b_xrLv66P5tBJJVCgkRRbdaolvzgkz5LDD0ZzOb8LlmWZi660uTAYH1sEOoblFGLvUteV_p81rtrJpE_HVeLDWgIr1h3dzWAQYiUGbX-8KsnjqXuoDPEqzVhBXE71Dgf2x-XOuKpNwEylM1PODQJzeQYGgKUQSck7ZWMshkduAD-IVaQ764AcWA0iWyaPpeFHpnQRx0Q',
    },
    {
        id: '3',
        name: 'Heineken Long Neck',
        category: '330ml • Cerveja',
        price: 'R$ 8',
        imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
    },
];

// ================================================

export default function HomeScreen() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState('1');

    const handleProductPress = (product: typeof FEATURED_PRODUCTS[0]) => {
        router.push({
            pathname: '/product-detail',
            params: {
                id: product.id,
                name: product.name,
                image: product.imageUrl,
                price: product.price,
                grape: product.category,
                rating: '4.8',
                description: 'Uma experiência sensorial única. Notas de frutas vermelhas maduras, toque de baunilha e um final persistente.'
            }
        });
    };

    return (
        <View className="flex-1 bg-background-dark">
            <StatusBar barStyle="light-content" />

            {/* ===== AMBIENT BACKGROUND GLOW ===== */}
            <LinearGradient
                colors={['#2c4823', '#1a2d15', '#142210']}
                locations={[0, 0.4, 0.8]}
                className="absolute top-0 left-0 right-0 h-[50%]"
            />

            {/* Soft diffused glow using Skia blur */}
            <SkiaBlurGlow
                color="rgba(70, 236, 19, 0.25)"
                blur={100}
                size={250}
                offsetY={-100}
            />

            <SafeAreaView className="flex-1" edges={['top']}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 120 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* ===== HEADER ===== */}
                    <View className="px-5 pt-2 pb-2 flex-row items-center justify-between">
                        <TouchableOpacity
                            onPress={() => {
                                Haptics.selectionAsync();
                                router.push('/loyalty');
                            }}
                            className="flex-row items-center gap-3"
                        >
                            <View className="relative">
                                <Image
                                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARVK7WNQASLKUjKFJdvKkQqmJW0ivLTCgEC9X75dhuHbTyj0I7hPdFDH3ABtnkVrlJvIMWzqJqDaVlEVRQFQ8M_m-PX29eOZ_cjvluuqqgYe04WUEy0W3r1i1WS2U999U2pxu4wi2x3Rlp7gMe7cXdJ6h7yjYFkifLxwV4LjnGvb9wvN_Siviy3fAC9GXPIVtt1U-DXuJXyFLqrygopWSM0Y2Z1iXEb8kRdlOmLg-duDAFMiArBQTRbpMmWMhPeE44Up4wjwCjsuM' }}
                                    className="w-10 h-10 rounded-full border-2 border-white/10"
                                />
                                <View className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-background-dark" />
                            </View>
                            <View>
                                <Text className="text-xs text-white/60 font-medium">Boa noite,</Text>
                                <Text className="text-sm font-bold text-white">Gabriel</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Points Badge */}
                        <TouchableOpacity
                            onPress={() => {
                                Haptics.selectionAsync();
                                router.push('/loyalty');
                            }}
                            className="flex-row items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                        >
                            <View className="w-6 h-6 rounded-full bg-yellow-400 items-center justify-center">
                                <MaterialIcons name="emoji-events" size={14} color="#142210" />
                            </View>
                            <View>
                                <Text className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Pontos</Text>
                                <Text className="text-xs font-bold text-white">2.450</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* ===== SEARCH BAR ===== */}
                    <View className="px-5 mt-4">
                        <View
                            className="flex-row items-center h-14 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                        >
                            <View className="pl-5">
                                <MaterialIcons name="search" size={24} color="#46ec13" />
                            </View>
                            <TextInput
                                placeholder="O que vamos beber hoje?"
                                placeholderTextColor="rgba(255,255,255,0.4)"
                                className="flex-1 px-4 text-white text-base"
                                style={{ height: 56 }}
                            />
                            <TouchableOpacity className="w-10 h-10 mr-2 rounded-xl bg-white/5 items-center justify-center">
                                <MaterialIcons name="tune" size={20} color="rgba(255,255,255,0.7)" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* ===== CATEGORIES ===== */}
                    <View className="mt-8">
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20 }}
                        >
                            {CATEGORIES.map((cat) => (
                                <CategoryPill
                                    key={cat.id}
                                    name={cat.name}
                                    icon={cat.icon}
                                    isActive={activeCategory === cat.id}
                                    onPress={() => setActiveCategory(cat.id)}
                                />
                            ))}
                        </ScrollView>
                    </View>

                    {/* ===== HERO BANNER ===== */}
                    <View className="px-5 mt-6">
                        <HeroBanner
                            title={`Comece a noite\ncom energia.`}
                            subtitle="Seleção especial de energéticos e destilados."
                            badge="Modo Esquenta"
                            badgeIcon="local-fire-department"
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBM5guC0IQOrQXmmZPdreRVF_qyu35GJ56z5-bRm5ROSviQLj97Z3oTiMQBb-u8RvnZUL63d3COkxyEGkDdLylefbjK0npILoxtJTIHqfAZuX0rNBZUnUmTnr40RMzq0fq_bQXfYuMBE33RuHQhgqOuik3gEZPtRAo218ZZQMuoMtSucRkrCCS9cZUJeXls10rCSGGr312cYNZxB-XB1OOcWFncnKfsr8bmtTN9IH7X-p4FE4VSQIo1zrkR0gZIsMRhl2p_tONc_64"
                            isLive={true}
                            onPress={() => console.log('Hero pressed')}
                        />
                    </View>

                    {/* ===== FEATURED PRODUCTS ===== */}
                    <View className="mt-10">
                        <View className="px-5 flex-row items-center justify-between mb-4">
                            <View>
                                <Text className="text-xl font-bold text-white">Bairro Favoritos</Text>
                                <Text className="text-xs text-white/50">O que seus vizinhos estão pedindo</Text>
                            </View>
                            <TouchableOpacity onPress={() => Haptics.selectionAsync()}>
                                <Text className="text-xs font-bold text-primary">Ver todos</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 8 }}
                        >
                            {FEATURED_PRODUCTS.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    category={product.category}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                    isTrending={product.isTrending}
                                    onPress={() => handleProductPress(product)}
                                    onAddToCart={() => {
                                        console.log('Add to cart:', product.name);
                                    }}
                                />
                            ))}
                        </ScrollView>
                    </View>

                </ScrollView>
            </SafeAreaView>

            {/* ===== FLOATING NAVBAR ===== */}
            <FloatingNavbar />
        </View>
    );
}
