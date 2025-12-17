# 🎬 Animações com Reanimated

Padrões de animação usando `react-native-reanimated v3`.

---

## 📦 Setup

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
```

---

## 🎈 Float Animation (Badge flutuante)

Usado no badge "98 Points" do ProductDetail:

```tsx
const translateY = useSharedValue(0);

useEffect(() => {
  translateY.value = withRepeat(
    withTiming(-8, { 
      duration: 2000, 
      easing: Easing.inOut(Easing.ease) 
    }),
    -1,    // Infinito
    true   // Reverse (yoyo)
  );
}, []);

const floatStyle = useAnimatedStyle(() => ({
  transform: [
    { translateY: translateY.value },
    { rotate: '12deg' },
  ],
}));

return (
  <Animated.View style={floatStyle}>
    <BadgeContent />
  </Animated.View>
);
```

---

## 🔘 Press Feedback

Escala suave ao pressionar:

```tsx
const scale = useSharedValue(1);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

const handlePressIn = () => {
  scale.value = withSpring(0.95);
};

const handlePressOut = () => {
  scale.value = withSpring(1);
};

return (
  <Animated.View style={animatedStyle}>
    <Pressable 
      onPressIn={handlePressIn} 
      onPressOut={handlePressOut}
    >
      <ButtonContent />
    </Pressable>
  </Animated.View>
);
```

---

## 📊 Progress Animation

Para barras de progresso:

```tsx
const progress = useSharedValue(0);

useEffect(() => {
  progress.value = withTiming(targetPercent / 100, { 
    duration: 800,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
}, [targetPercent]);

const progressStyle = useAnimatedStyle(() => ({
  width: `${progress.value * 100}%`,
}));

return (
  <View className="h-2 bg-white/10 rounded-full overflow-hidden">
    <Animated.View 
      className="h-full bg-primary rounded-full"
      style={progressStyle}
    />
  </View>
);
```

---

## 🚀 Entrada de Componente

Fade + slide up na montagem:

```tsx
const opacity = useSharedValue(0);
const translateY = useSharedValue(20);

useEffect(() => {
  opacity.value = withTiming(1, { duration: 400 });
  translateY.value = withSpring(0);
}, []);

const enterStyle = useAnimatedStyle(() => ({
  opacity: opacity.value,
  transform: [{ translateY: translateY.value }],
}));

return (
  <Animated.View style={enterStyle}>
    <Content />
  </Animated.View>
);
```

---

## ⚡ Preferências de Easing

| Tipo | Easing | Quando usar |
|------|--------|-------------|
| UI feedback | `withSpring` | Botões, toggles |
| Float/Loop | `Easing.inOut(Easing.ease)` | Badges flutuantes |
| Progress | `Easing.bezier(0.25,0.1,0.25,1)` | Barras de progresso |
| Entrada | `withSpring + withTiming` | Mount animations |

---

## ⚠️ Boas Práticas

### 1. Sempre cancele animações no unmount

```tsx
useEffect(() => {
  // start animation
  return () => {
    cancelAnimation(sharedValue);
  };
}, []);
```

### 2. Use `worklet` para callbacks pesados

```tsx
const onScroll = useAnimatedScrollHandler({
  onScroll: (event) => {
    'worklet';
    scrollY.value = event.contentOffset.y;
  },
});
```

### 3. Evite re-renders com memo

```tsx
const AnimatedCard = React.memo(({ data }) => {
  // animação aqui
});
```

---

## 🔗 Recursos

- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [Easing Functions Cheatsheet](https://easings.net/)
- [Layout Animations](https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations)
