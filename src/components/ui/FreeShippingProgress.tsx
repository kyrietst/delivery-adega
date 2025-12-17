import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { Canvas, Circle, Blur, Group } from '@shopify/react-native-skia';
import { colors } from '@/theme/colors';

interface FreeShippingProgressProps {
    currentValue: number;
    targetValue: number;
}

export function FreeShippingProgress({ currentValue, targetValue }: FreeShippingProgressProps) {
    const { width: screenWidth } = useWindowDimensions();
    const progress = Math.min((currentValue / targetValue) * 100, 100);
    const remaining = Math.max(targetValue - currentValue, 0);
    const isFree = remaining <= 0;

    return (
        <View
            className="p-5 rounded-2xl overflow-hidden bg-ui-bg/60 border border-ui-border"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
                elevation: 5,
            }}
        >
            {/* Decorative Glow using Skia blur */}
            <View className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] pointer-events-none">
                <Canvas style={{ flex: 1 }}>
                    <Group>
                        <Circle
                            cx={80}
                            cy={80}
                            r={50}
                            color={colors.brand.highlight}
                        />
                        <Blur blur={50} />
                    </Group>
                </Canvas>
            </View>

            {/* Header */}
            <View className="flex-row items-start justify-between mb-4 z-10">
                <View className="flex-1 pr-4">
                    <Text className="text-text-primary text-base font-bold leading-tight">
                        {isFree ? '🎉 Você conseguiu!' : 'Falta pouco!'}
                    </Text>
                    <Text className="text-text-secondary text-sm font-medium mt-1">
                        {isFree ? (
                            'Frete grátis garantido!'
                        ) : (
                            <>
                                Adicione{' '}
                                <Text className="text-brand font-bold">
                                    R$ {remaining.toFixed(2).replace('.', ',')}
                                </Text>
                                {' '}para ganhar frete grátis
                            </>
                        )}
                    </Text>
                </View>
                <View className="bg-ui-surface p-2 rounded-full">
                    <Text className="text-2xl">🚚</Text>
                </View>
            </View>

            {/* Progress Bar */}
            <View className="relative w-full h-3 bg-black/40 rounded-full overflow-hidden">
                <View
                    className="absolute top-0 left-0 h-full bg-brand rounded-full"
                    style={{
                        width: `${progress}%`,
                        shadowColor: colors.brand.DEFAULT,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    }}
                >
                    {/* Shimmer Effect */}
                    <View className="absolute top-0 right-0 bottom-0 w-full bg-white/30 opacity-50" />
                </View>
            </View>

            {/* Values */}
            <View className="flex-row justify-between mt-2 z-10">
                <Text className="text-xs font-mono font-medium text-text-muted">
                    R$ {currentValue.toFixed(2).replace('.', ',')}
                </Text>
                <Text className="text-xs font-mono font-medium text-text-muted">
                    R$ {targetValue.toFixed(2).replace('.', ',')}
                </Text>
            </View>
        </View>
    );
}
