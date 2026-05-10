# Contribuindo para o Nexus VORXYN

Obrigado por seu interesse em fortalecer o Oráculo.

O **Nexus VORXYN** é uma CLI agêntica de rápida evolução. As melhores contribuições são focadas, bem testadas e fáceis de revisar. Siga as diretrizes abaixo para manter a integridade do Vazio.

## Antes de Começar
- Pesquise [issues](https://github.com/ONeithan/Nexus-V-O-R-X-Y-N/issues) e [discussions](https://github.com/ONeithan/Nexus-V-O-R-X-Y-N/discussions) existentes.
- Use Issues para bugs confirmados e trabalho em funcionalidades acionáveis.
- Use Discussions para ajuda com configuração, ideias e conversas gerais.
- Para grandes mudanças, abra uma Issue primeiro para alinhar o escopo.

## Configuração Local
Instale as dependências:
```bash
bun install
```

Compile a CLI:
```bash
bun run build
```

Teste de fumaça (Smoke Test):
```bash
bun run smoke
```

Execute localmente:
```bash
bun run dev
```

## Fluxo de Desenvolvimento
- Mantenha os Pull Requests (PRs) focados em um único problema ou funcionalidade.
- Evite misturar limpezas não relacionadas na mesma alteração.
- Adicione ou atualize testes sempre que a alteração afetar o comportamento.
- Atualize a documentação quando houver mudanças em comandos ou fluxos.

## Estilo de Código
- Siga o estilo de código existente nos arquivos tocados.
- Prefira alterações pequenas e legíveis a reescritas amplas.
- Mantenha os comentários úteis e concisos.

## Mudanças de Provedores
O VORXYN suporta múltiplos caminhos de provedores (Ollama, OpenAI, Gemini). Se você alterar a lógica de provedores:
- Seja explícito sobre quais provedores são afetados.
- Evite quebrar provedores de terceiros enquanto corrige comportamentos específicos.
- Teste o caminho exato do modelo/provedor alterado.

**"Pelo Vazio, o conhecimento será processado."**
