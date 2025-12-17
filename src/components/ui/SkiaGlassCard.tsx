import React, { useMemo } from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import {
    Canvas,
    BackdropFilter,
    Blur,
    Fill,
    rrect,
    rect,
} from "@shopify/react-native-skia";
import { cssInterop } from "nativewind";

interface SkiaGlassCardProps extends ViewProps {
    intensity?: number;
    tint?: string;
    className?: string;
    children?: React.ReactNode;
}

const NativeSkiaGlassCard = React.forwardRef<View, SkiaGlassCardProps>(
    ({ intensity = 10, tint = "rgba(255,255,255,0.05)", style, children, ...props }, ref) => {

        // Transforma o estilo do NativeWind/StyleSheet em objeto
        const styles = useMemo(() => StyleSheet.flatten(style), [style]);

        return (
            <View ref={ref} style={[styles, { overflow: 'hidden' }]} {...props}>
                {/* Camada do Skia (Backdrop Blur Real) */}
                <Canvas style={StyleSheet.absoluteFill}>
                    <BackdropFilter
                        filter={<Blur blur={intensity} />}
                        clip={rrect(rect(0, 0, 9999, 9999), 0, 0)}
                    >
                        <Fill color={tint} />
                    </BackdropFilter>
                </Canvas>

                {/* Conteúdo dos Filhos (Renderizado pelo React Native) */}
                <View style={{ flex: 1, zIndex: 1 }}>
                    {children}
                </View>
            </View>
        );
    }
);

// Habilita classes do Tailwind (className)
cssInterop(NativeSkiaGlassCard, {
    className: "style",
});

export { NativeSkiaGlassCard as SkiaGlassCard };
