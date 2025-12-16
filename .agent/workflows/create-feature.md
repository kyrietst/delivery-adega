---
description: Como criar uma nova feature seguindo os padrões do projeto
---

# Workflow: Criar Nova Feature

## Pré-requisitos
1. Ler `.docs/architecture.md`
2. Ler `.docs/design-system.md`
3. Verificar se a feature já existe em `.docs/features/`

## Passos

### 1. Documentar a Feature
Criar `.docs/features/[nome-feature].md` com:
- [ ] Visão geral
- [ ] Tabelas do Supabase envolvidas
- [ ] Componentes planejados
- [ ] Hooks necessários
- [ ] UI/UX mockup
- [ ] Estados de erro

### 2. Criar Estrutura de Pasta
```bash
src/features/[nome-feature]/
├── components/
│   ├── [Component1].tsx
│   └── [Component2].tsx
├── hooks/
│   ├── use[Feature].ts
│   └── use[Action].ts
├── types.ts
└── store.ts (opcional)
```

### 3. Criar Types
Em `src/features/[nome-feature]/types.ts`:
- [ ] Definir interfaces baseadas no schema do Supabase
- [ ] Exportar com `export type`
- [ ] NO `any` types

### 4. Criar Hooks (React Query)
Em `src/features/[nome-feature]/hooks/`:
- [ ] `useQuery` para fetch
- [ ] `useMutation` para create/update/delete
- [ ] Invalidar queries apropriadas

### 5. Criar Componentes UI
Em `src/features/[nome-feature]/components/`:
- [ ] Usar classes do `tailwind.config.js`
- [ ] Glass cards: `bg-glass-surface border-glass-stroke`
- [ ] Haptics em Pressables
- [ ] SafeAreaView quando necessário

### 6. Criar Rota
Em `src/app/`:
- [ ] Criar `[nome-feature].tsx` ou `(group)/[nome-feature].tsx`
- [ ] Importar componentes da feature
- [ ] Configurar layout se necessário

### 7. Verificar
- [ ] TypeScript compila sem erros
- [ ] Segue padrões do `.docs/architecture.md`
- [ ] Usa tokens do `.docs/design-system.md`
- [ ] Testa manualmente no Expo Go

### 8. Documentar Desvios
Se precisou desviar dos padrões, documente o **porquê** em:
- Comentário no código
- Atualização do `.docs/features/[nome-feature].md`

## Exemplo Completo

```typescript
// src/features/sales/types.ts
export type Sale = {
  id: string;
  total: number;
  items: SaleItem[];
  created_at: string;
};

// src/features/sales/hooks/useSales.ts
import { useQuery } from '@tanstack/react-query';

export function useSales() {
  return useQuery({
    queryKey: ['sales'],
    queryFn: async () => {
      const { data } = await supabase.from('sales').select('*');
      return data as Sale[];
    },
  });
}

// src/features/sales/components/SalesList.tsx
import { FlatList } from 'react-native';
import { useSales } from '../hooks/useSales';

export function SalesList() {
  const { data: sales, isLoading } = useSales();
  
  if (isLoading) return <LoadingSpinner />;
  
  return (
    <FlatList
      data={sales}
      renderItem={({ item }) => <SaleCard sale={item} />}
      className="flex-1"
    />
  );
}
```

## Checklist Final
- [ ] Documentação criada em `.docs/features/`
- [ ] Estrutura de pasta seguida
- [ ] Types definidos
- [ ] Hooks com React Query
- [ ] Componentes com NativeWind
- [ ] Rota criada
- [ ] TypeScript OK
- [ ] Teste manual OK
