# 📚 Sistema de Cadastro de Notas - TypeBB

Um sistema completo desenvolvido em **TypeScript** para cadastro de alunos e suas notas em um banco de dados **PostgreSQL**.

## 🎯 Descrição

Este projeto permite o cadastro de alunos com suas informações pessoais e notas de três matérias (Matemática, História e Geografia). O sistema calcula automaticamente a média de 8 notas por matéria e armazena os dados em um banco PostgreSQL.

## 🚀 Funcionalidades

- ✅ Cadastro de dados pessoais do aluno (nome, série, idade)
- ✅ Coleta de 8 notas por matéria
- ✅ Cálculo automático de médias
- ✅ Validação de campos obrigatórios
- ✅ Conexão segura com banco PostgreSQL
- ✅ Interface interativa via terminal
- ✅ Tratamento de erros

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime JavaScript
- **PostgreSQL** - Banco de dados
- **pg** - Driver PostgreSQL para Node.js
- **readline-sync** - Interface interativa de terminal

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter:

- Node.js (versão 16 ou superior)
- PostgreSQL instalado e configurado
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jproveri/TypeBB.git
   cd TypeBB
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados PostgreSQL:**
   
   Crie a tabela no seu banco:
   ```sql
   CREATE TABLE notas (
       nome VARCHAR(100),
       serie VARCHAR(20),
       idade INT,
       matematica DECIMAL(4,2),
       historia DECIMAL(4,2),
       geografica DECIMAL(4,2)
   );
   ```

4. **Configure as credenciais do banco:**
   
   Edite o arquivo `ExercicioBancoDeDados.ts` e ajuste as configurações:
   ```typescript
   const dbConfig = {
       user: "seu_usuario",
       host: "localhost",
       database: "seu_banco",
       password: "sua_senha",
       port: 5432,
   };
   ```

## ▶️ Como Executar

1. **Compile o TypeScript:**
   ```bash
   npx tsc
   ```

2. **Execute o programa:**
   ```bash
   node dist/ExercicioBancoDeDados.js
   ```

## 📖 Como Usar

1. **Execute o programa** e siga as instruções no terminal
2. **Digite o nome** do aluno
3. **Informe a série** (número)
4. **Digite a idade** (número)
5. **Insira 8 notas para Matemática** (uma por vez)
6. **Insira 8 notas para História** (uma por vez)
7. **Insira 8 notas para Geografia** (uma por vez)
8. O sistema calculará as médias e salvará no banco

### Exemplo de Execução

```
--- Cadastro de Novo Aluno ---
Digite o nome: João Silva
Digite a série: 8
Digite a idade: 14

--- Digite as notas das matérias ---
Digite a nota 1 de Matemática: 8.5
Digite a nota 2 de Matemática: 7.0
...
→ Média de Matemática: 7.75

Conectando ao banco de dados...
✅ Conexão bem-sucedida! Inserindo dados...

-----------------------------------------
✅ Dados inseridos com sucesso!
Nome: João Silva
Série: 8
Idade: 14
Médias → Matemática: 7.75, História: 8.25, Geografia: 7.50
-----------------------------------------
```

## 📁 Estrutura do Projeto

```
TypeBB/
├── ExercicioBancoDeDados.ts    # Código fonte principal
├── ExercicioBancoDeDados.js    # Arquivo JavaScript compilado
├── package.json                # Dependências e scripts
├── tsconfig.json              # Configurações TypeScript
├── dist/                      # Arquivos compilados
│   └── ExercicioBancoDeDados.js
├── node_modules/              # Dependências instaladas
└── README.md                  # Este arquivo
```

## 🗃️ Estrutura do Banco de Dados

| Campo      | Tipo           | Descrição                    |
|------------|----------------|------------------------------|
| nome       | VARCHAR(100)   | Nome completo do aluno       |
| serie      | VARCHAR(20)    | Série/ano escolar            |
| idade      | INT            | Idade do aluno               |
| matematica | DECIMAL(4,2)   | Média das notas de matemática|
| historia   | DECIMAL(4,2)   | Média das notas de história  |
| geografica | DECIMAL(4,2)   | Média das notas de geografia |

## ⚙️ Configurações do TypeScript

O projeto usa as seguintes configurações no `tsconfig.json`:

- **Target:** ES2020
- **Module:** CommonJS
- **Module Resolution:** Node
- **Strict Mode:** Habilitado
- **ES Module Interop:** Habilitado

## 🔒 Segurança


