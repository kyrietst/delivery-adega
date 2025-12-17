import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SkiaBlurGlow } from '@/components/ui/SkiaBlurGlow';
import { colors } from '@/theme/colors';

interface ScreenWrapperProps extends ViewProps {
    children: React.ReactNode;
    withGlow?: boolean; // Opção para ligar/desligar o brilho verde no topo
    edges?: SafeAreaViewProps['edges']; // Para controlar safe area (top, bottom, etc)
}

/**
 * ScreenWrapper - Componente padrão para telas
 * 
 * Centraliza:
 * - Background escuro com gradiente
 * - StatusBar configurada
 * - Glow ambiente opcional
 * - SafeArea configurada
 * 
 * @example
 * <ScreenWrapper withGlow={true}>
 *   <ScrollView>
 *     ...conteúdo
 *   </ScrollView>
 * </ScreenWrapper>
 */
export function ScreenWrapper({
    children,
    withGlow = true,
    edges = ['top'],
    style,
    ...props
}: ScreenWrapperProps) {
    return (
        <View className="flex-1 bg-ui-bg" style={style} {...props}>
            <StatusBar style="light" backgroundColor="transparent" translucent />

            {/* 1. Background Base Gradiente (Profundidade) */}
            <LinearGradient
                colors={[colors.gradients.bgTop, colors.gradients.bgMid, colors.gradients.bgBottom]}
                locations={[0, 0.4, 0.8]}
                style={StyleSheet.absoluteFill}
                pointerEvents="none"
            />

            {/* 2. Glow Ambiente (Skia) - Opcional */}
            {withGlow && (
                <SkiaBlurGlow
                    color={colors.brand.highlight}
                    blur={120}
                    size={300}
                    offsetY={-120}
                />
            )}

            {/* 3. Conteúdo Seguro */}
            <SafeAreaView className="flex-1" edges={edges}>
                {children}
            </SafeAreaView>
        </View>
    );
}
