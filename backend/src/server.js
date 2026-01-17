import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { PrismaClient } from "@prisma/client";

import authRoutes from "./routes/auth.js";
import restrictedRoutes from "./routes/restricted.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

/* ===== CORS ===== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://moura-pereira-advogados.vercel.app",
      "https://mourapereira.com.br",
      "https://www.mourapereira.com.br",
    ],
  })
);

/* ===== Middlewares ===== */
app.use(express.json());

/* ===== Static files (IMAGENS) ===== */
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

/* ===== Routes ===== */
app.use("/auth", authRoutes);
app.use("/restricted", restrictedRoutes);

/* ===== Utils ===== */
function toFullImageUrl(image) {
  return image
}

/* ===== POSTS ===== */
app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  const normalized = posts.map((p) => ({
    ...p,
    image: toFullImageUrl(p.image),
  }));
  res.json(normalized);
});

app.get("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }

  res.json({
    ...post,
    image: toFullImageUrl(post.image),
  });
});

app.post("/api/posts", async (req, res) => {
  const { image, tags, title, smallTitle, slug, excerpt, date, content } =
    req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        image,
        tags,
        title,
        smallTitle,
        slug,
        excerpt,
        date,
        content,
      },
    });
    res.json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const { image, tags, title, smallTitle, excerpt, date, content } = req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: { slug },
      data: {
        image,
        tags,
        title,
        smallTitle,
        excerpt,
        date,
        content,
      },
    });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    await prisma.post.delete({ where: { slug } });
    res.json({ message: "Post deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ===== CONTATOS ===== */
app.get("/api/contatos", async (req, res) => {
  try {
    const contatos = await prisma.contato.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(contatos);
  } catch {
    res.status(500).json({ error: "Erro ao buscar formulários de contato" });
  }
});

app.post("/api/contatos", async (req, res) => {
  const { nome, email, telefone, tipoNegocio, mensagem } = req.body;

  try {
    const newContato = await prisma.contato.create({
      data: { nome, email, telefone, tipoNegocio, mensagem },
    });
    res.json(newContato);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ===== Start ===== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
