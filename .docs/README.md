# 📚 Documentação do Adega Anita Mobile

Este diretório contém toda a documentação de contexto para guiar o desenvolvimento com IA.

## 🗂️ Estrutura

```
.docs/
├── README.md                    # Este arquivo (índice)
├── architecture.md              # Decisões arquiteturais e padrões
├── design-system.md             # Tokens, componentes e estilo
├── features/                    # Documentação por feature
│   ├── inventory.md
│   ├── sales.md
│   └── delivery.md
└── user-stories.md              # Histórias de usuário e fluxos
```

## 🎯 Como Usar

### Para o Agente IA
1. **Sempre leia** `architecture.md` antes de criar novos arquivos
2. **Consulte** `design-system.md` antes de criar componentes UI
3. **Verifique** a feature específica em `features/` antes de fazer alterações
4. **Siga** as user stories em `user-stories.md` para entender o contexto

### Para Desenvolvedores
- Atualize as docs **antes** de implementar features complexas
- Use os workflows em `.agent/workflows/` para tarefas repetitivas
- Mantenha as user rules em `.gemini/GEMINI.md` sincronizadas

---

> **Regra de Ouro**: Se o agente não sabe como implementar algo, ele deve **perguntar** ao invés de inventar.
