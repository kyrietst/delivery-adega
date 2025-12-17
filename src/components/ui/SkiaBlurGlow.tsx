import React from 'react';
import { Canvas, Circle, Blur, Group } from '@shopify/react-native-skia';
import { View, ViewProps, useWindowDimensions } from 'react-native';

interface SkiaBlurGlowProps extends ViewProps {
    color?: string;
    blur?: number;
    size?: number;
    offsetY?: number;
}

export function SkiaBlurGlow({
    color = 'rgba(70, 236, 19, 0.25)',
    blur = 80,
    size = 200,
    offsetY = -50,
    style,
    ...props
}: SkiaBlurGlowProps) {
    const { width } = useWindowDimensions();
    const canvasHeight = size + blur * 2;
    const canvasWidth = width;

    return (
        <View
            style={[
                {
                    position: 'absolute',
                    top: offsetY,
                    left: 0,
                    right: 0,
                    height: canvasHeight,
                    pointerEvents: 'none',
                },
                style,
            ]}
            {...props}
        >
            <Canvas style={{ flex: 1 }}>
                <Group>
                    <Circle
                        cx={canvasWidth / 2}
                        cy={size / 2 + blur}
                        r={size / 2}
                        color={color}
                    />
                    <Blur blur={blur} />
                </Group>
            </Canvas>
        </View>
    );
}
