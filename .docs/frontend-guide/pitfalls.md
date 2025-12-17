# ⚠️ Armadilhas Comuns (Pitfalls)

Erros frequentes no desenvolvimento React Native e como evitá-los.

---

## 1. 🚫 CSS Blur não existe no RN

### ❌ Errado
```tsx
<View style={{ backdropFilter: 'blur(10px)' }} />
<View className="blur-xl" />  // NativeWind ignora
```

### ✅ Correto
```tsx
// Use SkiaBlurGlow para glow
<SkiaBlurGlow blur={100} />

// Ou SkiaGlassCard para painéis
<SkiaGlassCard intensity={30}>...</SkiaGlassCard>
```

---

## 2. 🚫 StyleSheet.create para tudo

### ❌ Errado
```tsx
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#142210' },
  title: { fontSize: 24, color: 'white', fontWeight: 'bold' },
});
```

### ✅ Correto
```tsx
<View className="flex-1 bg-background-dark">
  <Text className="text-2xl text-white font-bold">
```

> Reserve `style={}` apenas para valores dinâmicos como `width: progress%`.

---

## 3. 🚫 Esquecer SafeAreaView

### ❌ Errado
```tsx
<View className="flex-1">
  <View className="pt-4">  {/* Vai ficar sob o notch */}
```

### ✅ Correto
```tsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView className="flex-1" edges={['top']}>
```

---

## 4. 🚫 ScrollView sem padding para FloatingNavbar

### ❌ Errado
```tsx
<ScrollView>
  {/* Conteúdo vai ficar sob o navbar */}
</ScrollView>
<FloatingNavbar />
```

### ✅ Correto
```tsx
<ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
  {/* Conteúdo visível */}
</ScrollView>
<FloatingNavbar />
```

---

## 5. 🚫 Imports relativos longos

### ❌ Errado
```tsx
import { SkiaGlassCard } from '../../../components/ui/SkiaGlassCard';
```

### ✅ Correto
```tsx
import { SkiaGlassCard } from '@/components/ui/SkiaGlassCard';
```

---

## 6. 🚫 Esquecer Haptics

### ❌ Errado
```tsx
<TouchableOpacity onPress={() => navigate('/cart')}>
```

### ✅ Correto
```tsx
import * as Haptics from 'expo-haptics';

<TouchableOpacity onPress={() => {
  Haptics.selectionAsync();
  navigate('/cart');
}}>
```

---

## 7. 🚫 Skia no Expo Go

### O Problema
Componentes Skia podem não renderizar corretamente no Expo Go:
- `SkiaGlassCard` pode aparecer em branco
- `SkiaBlurGlow` pode não mostrar blur

### A Solução
1. **Fallback nativo:** Use `View + bg-opacity` quando possível
2. **Teste em build:** Use `eas build --profile development`
3. **Simulador local:** `npx expo run:ios` ou `run:android`

---

## 8. 🚫 LinearGradient sem Expo

### ❌ Errado
```tsx
import LinearGradient from 'react-native-linear-gradient';
```

### ✅ Correto
```tsx
import { LinearGradient } from 'expo-linear-gradient';
```

---

## 9. 🚫 Cores hardcoded

### ❌ Errado
```tsx
<View style={{ backgroundColor: '#142210' }}>
<Text style={{ color: '#46ec13' }}>
```

### ✅ Correto
```tsx
<View className="bg-background-dark">
<Text className="text-primary">
```

Tokens definidos em `tailwind.config.js`.

---

## 10. 🚫 useEffect sem cleanup em animações

### ❌ Errado
```tsx
useEffect(() => {
  translateY.value = withRepeat(withTiming(-8, { duration: 2000 }), -1, true);
}, []);  // Memory leak se componente desmontar
```

### ✅ Correto
```tsx
useEffect(() => {
  translateY.value = withRepeat(
    withTiming(-8, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
    -1,
    true
  );
  
  return () => {
    cancelAnimation(translateY);
  };
}, []);
```

---

## 📋 Checklist Pré-Commit

- [ ] Sem `StyleSheet.create` para estilos estáticos
- [ ] Todos os TouchableOpacity têm Haptics
- [ ] SafeAreaView nas telas
- [ ] paddingBottom no ScrollView (se tem FloatingNavbar)
- [ ] Imports com `@/`
- [ ] Cores usando tokens do Tailwind
