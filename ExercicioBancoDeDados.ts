// Importações no estilo TypeScript (ESM com suporte CommonJS)
import readlineSync from "readline-sync";
import { Pool } from "pg";

// ⚠️ Nunca use credenciais reais em código de produção — este é apenas um exemplo didático
const dbConfig = {
    user: "aluno",
    host: "localhost",
    database: "db_profedu",
    password: "102030",
    port: 5432,
};

const pool = new Pool(dbConfig);

/**
 * Função que lê 8 notas de uma matéria e calcula a média
 */
function calcularMedia(materia: string): number {
    let soma = 0;
    for (let i = 1; i <= 8; i++) {
        const nota = readlineSync.questionFloat(`Digite a nota ${i} de ${materia}: `);
        soma += nota;
    }
    const media = soma / 8;
    console.log(`→ Média de ${materia}: ${media.toFixed(2)}\n`);
    return media;
}

/**
 * Função principal para inserir dados no banco de dados
 */
async function inserirDados(): Promise<void> {
    console.log("\n--- Cadastro de Novo Aluno ---");

    const nome: string = readlineSync.question("Digite o nome: ");
    const serie: number = readlineSync.questionInt("Digite a série: ");
    const idade: number = readlineSync.questionInt("Digite a idade: ");

    if (!nome || !idade || !serie) {
        console.error("\n❌ Erro: Todos os campos são obrigatórios! Operação cancelada.");
        await pool.end();
        return;
    }

    console.log("\n--- Digite as notas das matérias ---");
    const matematica: number = calcularMedia("Matemática");
    const historia: number = calcularMedia("História");
    const geografia: number = calcularMedia("Geografia");

    try {
        console.log("\nConectando ao banco de dados...");
        const client = await pool.connect();
        console.log("✅ Conexão bem-sucedida! Inserindo dados...");

        const insertQuery = `
            INSERT INTO public.notas (nome, serie, idade, matematica, historia, geografica)
            VALUES ($1, $2, $3, $4, $5, $6);
        `;
        const values = [nome, serie, idade, matematica, historia, geografia];

        await client.query(insertQuery, values);
        client.release();

        console.log("-----------------------------------------");
        console.log("✅ Dados inseridos com sucesso!");
        console.log(`Nome: ${nome}`);
        console.log(`Série: ${serie}`);
        console.log(`Idade: ${idade}`);
        console.log(`Médias → Matemática: ${matematica.toFixed(2)}, História: ${historia.toFixed(2)}, Geografia: ${geografia.toFixed(2)}`);
        console.log("-----------------------------------------");

    } catch (error) {
        console.error("❌ Ocorreu um erro ao interagir com o banco de dados:", error);
    } finally {
        await pool.end();
        console.log("🔒 Conexão com o banco de dados encerrada.");
    }
}

inserirDados();
