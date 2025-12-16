import React from "react";
import { View, ViewProps } from "react-native";
import { Canvas, RoundedRect, Blur, Paint } from "@shopify/react-native-skia";

interface SkiaGlassCardProps extends ViewProps {
    children: React.ReactNode;
    blur?: number;
    opacity?: number;
    borderOpacity?: number;
    borderRadius?: number;
}

export function SkiaGlassCard({
    children,
    blur = 20,
    opacity = 0.05,
    borderOpacity = 0.1,
    borderRadius = 24,
    style,
    ...props
}: SkiaGlassCardProps) {
    return (
        <View style={[{ position: "relative" }, style]} {...props}>
            {/* Skia Glass Layer */}
            <Canvas style={{ position: "absolute", width: "100%", height: "100%" }}>
                {/* Background with blur */}
                <RoundedRect
                    x={0}
                    y={0}
                    width="100%"
                    height="100%"
                    r={borderRadius}
                >
                    <Paint color={`rgba(255, 255, 255, ${opacity})`}>
                        <Blur blur={blur} />
                    </Paint>
                </RoundedRect>

                {/* Border */}
                <RoundedRect
                    x={1}
                    y={1}
                    width="99%"
                    height="99%"
                    r={borderRadius}
                    style="stroke"
                    strokeWidth={1}
                    color={`rgba(255, 255, 255, ${borderOpacity})`}
                />
            </Canvas>

            {/* Content */}
            <View style={{ padding: 0 }}>{children}</View>
        </View>
    );
}
