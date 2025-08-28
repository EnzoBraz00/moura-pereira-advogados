import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import path from "path";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/assets", express.static(path.join(process.cwd(), "src/assets")));

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  // TODO: adicionar bcrypt.compare
  res.json({ message: "Login OK", user: { email: user.email } });
});

// rota para listar posts
app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

// rota para criar post (restrita futuramente)
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
        date, // schema expects String
        content,
      },
    });
    res.json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
