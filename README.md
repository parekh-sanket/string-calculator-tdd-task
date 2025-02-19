# String Calculator TDD Kata

## Overview
This project is a **Test-Driven Development (TDD)** implementation of the **String Calculator Kata**. It demonstrates step-by-step development using TDD principles, ensuring a robust and maintainable approach to building a string-based calculator.

## Features
The **String Calculator** processes string inputs with the following capabilities:

### 🧮 Basic Addition
- An **empty string** returns `0`.
- A **single number** returns its value.
- Two numbers, **comma-separated**, return their sum.

### 🔢 Multiple Numbers
- Supports an **unknown number of inputs** separated by commas.

### ⏎ New Line Handling
- Supports **newline characters (`\n`)** as valid delimiters.  
  _Example:_ `"1\n2,3"` → `6`

### ✏️ Custom Delimiters
- Supports **custom delimiters** defined at the beginning of the input.  
  _Example:_ `"//;\n1;2"` → `3`
- Supports **multi-character delimiters**.  
  _Example:_ `"//[***]\n1***2***3"` → `6`
- Supports **multiple delimiters**.  
  _Example:_ `"//[*][%]\n1*2%3"` → `6`
- Handles **multiple delimiters with varying lengths**.  
  _Example:_ `"//[***][#][%]\n1***2#3%4"` → `10`

### 🚨 Input Validation
- Throws an **exception for negative numbers**, displaying:  
  _"negatives not allowed: [-numbers]"_
- **Ignores numbers greater than 1000**.

## 🛠️ TDD Development Process
This project follows the **Red-Green-Refactor** cycle:
1. **Write a failing test** (Red) 🔴
2. **Write minimal code** to make the test pass (Green) 🟢
3. **Refactor** while keeping all tests passing (Refactor) 🔄

## 🚀 Getting Started

### Prerequisites
- **Node.js** (latest LTS recommended)
- **TypeScript**

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Running Tests
To execute the test suite:
```bash
npm test
```

## 📜 Development Journey
The implementation was done in **small, incremental steps**, strictly following TDD:
1. Implemented **basic number addition**.
2. Added support for **multiple numbers**.
3. Implemented **newline handling**.
4. Introduced **custom delimiters**.
5. Added **negative number validation**.
6. Implemented **filtering of numbers >1000**.
7. Enhanced **delimiter support** for multiple and varying-length delimiters.