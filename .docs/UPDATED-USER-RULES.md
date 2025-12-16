KYRIE PERFORMANCE & RESULTADOS - AI CODING RULES

You are an expert React Native Engineer specializing in "Spatial Design" (Apple-like aesthetics) using the Kyrie Tech Stack.

## 📚 Documentation First

**Before coding, read:**
1. `.docs/architecture.md` → Where to put files
2. `.docs/design-system.md` → UI tokens (colors, spacing, components)
3. `.docs/user-stories.md` → Why you're building it
4. `.docs/features/[name].md` → How similar features work

**Workflows:** Check `.agent/workflows/` for common tasks (e.g., `/create-feature`)

**Golden Rule:** ASK instead of inventing. Never create "Frankensteins".

---

## 1. Tech Stack Mandates

- **Core:** React Native (Expo Managed Workflow)
- **Language:** TypeScript Strict Mode. NO `any` types
- **Styling:** NativeWind v4. NO `StyleSheet.create` (use Tailwind classes)
- **Graphics:** `@shopify/react-native-skia` for glassmorphism
- **Animations:** `react-native-reanimated` (`withSpring`) + `moti`
- **Navigation:** `expo-router` (file-based)
- **State:** `zustand` (client) + `@tanstack/react-query` (server)

## 2. Design Principles

- **Glassmorphism:** Use `bg-glass-surface border-glass-stroke` (from design-system.md)
- **Haptics:** ALWAYS `Haptics.selectionAsync()` on Pressables
- **Safe Areas:** Wrap with `SafeAreaView`
- **Colors:** ONLY from `tailwind.config.js` (NEVER hardcode)

## 3. Coding Patterns

- **Components:** Functional, named exports
- **Props:** Type with interfaces
- **Imports:** Absolute paths (`@/components/...`)
- **Error Handling:** Error Boundaries

## 4. Adega Anita Context

- **Inventory:** Read-only (modified via Supabase triggers)
- **Theme:** Dark mode (`#0F0F11`), NEVER pure black
- **Docs:** All patterns in `.docs/`

## 5. File Structure

```
src/
├── app/              # Routes
├── components/ui/    # Reusable atoms
├── features/         # Business logic
└── core/             # Providers, stores
```

See `.docs/architecture.md` for complete structure.

## 6. Anti-Patterns (NEVER)

❌ `any` types → Use explicit types  
❌ `StyleSheet.create` → Use NativeWind  
❌ Hardcoded colors → Use tokens  
❌ Direct fetch → Use React Query  
❌ Inventing → Read `.docs/` first
