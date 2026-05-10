<p align="center">
  <img src="docs/assets/logo.png" alt="Nexus VORXYN Logo" width="600">
</p>

<h1 align="center">Nexus VORXYN</h1>

<p align="center">
  <strong>Void Oculus Revenant Xul Yoke Night</strong><br>
  <em>Interface Neural Agêntica para Orquestração de Conhecimento e Automação de Terminal.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Author-ONeithan-blue?style=for-the-badge&labelColor=black" alt="Author ONeithan">
  <img src="https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge&labelColor=black" alt="Version 1.0.0">
</p>

---

## 🌌 Visão Geral
**Nexus VORXYN** é uma interface de linha de comando (CLI) avançada, projetada para atuar como um agente autônomo de codificação. Derivado da arquitetura do Claude Code e OpenClaude, o VORXYN foi refinado para oferecer soberania total de dados e integração profunda com ecossistemas de IA locais e remotos.

## ⚡ Capacidades Principais
- **Agente de Terminal Autônomo**: Execução de comandos bash, leitura/escrita de arquivos e análise de sistemas de arquivos com alta precisão.
- **Soberania de Modelos**: Suporte nativo para provedores OpenAI-compatible, permitindo o uso de modelos locais via **Ollama**, DeepSeek, Gemini e outros.
- **Ecossistema MCP**: Integração total com servidores Model Context Protocol (MCP) para recall de memória de longa duração.
- **Modos de Operação**: Inclui rotinas de manutenção de conhecimento (Dream Mode) e execução de tarefas de alta complexidade.

## 🚀 Instalação e Build

### Pré-requisitos
- Node.js (>= 22)
- Bun (Recomendado)

### Procedimento
```bash
bun install
bun run build
npm link
```

## 🛠️ Configuração de Provedor

O VORXYN utiliza variáveis de ambiente para orquestração de modelos. Exemplo de configuração para modelos locais:

```powershell
$env:CLAUDE_CODE_USE_OPENAI="1"
$env:OPENAI_BASE_URL="http://seu-ip-local:11434/v1"
$env:OPENAI_MODEL="qwen2.5-coder:7b"

vorxyn
```

---

## ⚖️ Licença
Nexus VORXYN é mantido por **ONeithan**. 
Baseado nos projetos OpenClaude e Claude Code (Anthropic PBC). Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
