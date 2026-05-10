# Nexus VORXYN on Android (Termux)

A complete guide to running Nexus VORXYN on Android using Termux + proot Ubuntu.

## 📱 Background

Nexus VORXYN requires [Bun](https://bun.sh) to build, and Bun does not support Android natively. The workaround is running a real Ubuntu environment inside Termux via `proot-distro`, where Bun's Linux binary works correctly.

## 🚀 Installation Guide

### Step 1 — Install Termux
Install Termux from [F-Droid](https://f-droid.org/en/packages/com.termux/).

### Step 2 — Setup Ubuntu
Inside Termux, run:
```bash
pkg update && pkg upgrade
pkg install proot-distro
proot-distro install ubuntu
proot-distro login ubuntu
```

### Step 3 — Install Bun & Git
Inside the Ubuntu shell:
```bash
apt update && apt upgrade
apt install curl git
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

### Step 4 — Clone Nexus VORXYN
```bash
git clone https://github.com/ONeithan/Nexus-V-O-R-X-Y-N.git
cd Nexus-V-O-R-X-Y-N
```

### Step 5 — Build & Run
```bash
bun install
bun run build
npm link
vorxyn
```

---

## 🛠️ Configuration
Configure your model via environment variables as usual. Note that local inference on Android requires a powerful device and a model that fits in RAM.

**"Pelo Vazio, o conhecimento será processado."**
