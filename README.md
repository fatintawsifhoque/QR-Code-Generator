# 📱 QR Code Generator (Dual Framework Edition)

A clean, responsive, and fully functional QR Code Generator built using **both Vue 3 and React**. 

Instead of just making it work, I built this exact same UI and logic in two different ecosystems to deeply understand how they handle state management, reactivity, and user input under the hood.

---

### ✨ Features

- **Dual Framework Implementation:** The exact same UI and logic built in both Vue 3 (Composition API) and React (Hooks).
- **Smart Default State:** Initializes with a default QR code (linking to my GitHub profile) so the UI never looks empty on first load.
- **Intelligent Reset Logic:** If the user clicks "Generate" with an empty input, it smartly resets the view back to the default GitHub QR code.
- **Auto-Clear Input:** The input field automatically clears itself after generating a new QR code, keeping the interface clean for the next entry.
- **Custom Tailwind UI:** Features a unique, hand-crafted design with a lime-green theme, dotted borders, and a custom animated footer.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Key Concept:** Uses `ref()` for reactivity and `v-model` for effortless two-way data binding.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concept:** Uses `useState` and Controlled Components (`value` + `onChange`) for explicit state management.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first, custom-styled UI)
- 🌐 **QR Server API** (Free, reliable QR code generation)

---

### 🚀 Live Demos & Source

Experience the smooth UI live. Both versions share the exact same design language but are powered by different engines:

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
|  **Vue 3** | [🔗 View Vue Live Demo](https://qr-code-generator-vue-fatin.vercel.app) | [`/vue`](#) |
| ⚛️ **React** | [🔗 View React Live Demo](https://qr-code-generator-react-fatin.vercel.app) | [`/react`](#) |

---
