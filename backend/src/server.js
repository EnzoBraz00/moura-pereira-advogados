import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import path from "path";
import authRoutes from "./routes/auth.js";
import restrictedRoutes from "./routes/restricted.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/restricted", restrictedRoutes);

function toFullImageUrl(image) {
  if (typeof image !== "string") return image;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  if (image.startsWith("/src/assets")) return `http://localhost:5173${image}`;
  if (image.startsWith("/assets")) return `http://localhost:3000${image}`;
  return image;
}

// rota para listar posts
app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  const normalized = posts.map((p) => ({ ...p, image: toFullImageUrl(p.image) }));
  res.json(normalized);
});

// rota para buscar post por slug
app.get("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return res.status(404).json({ error: "Post não encontrado" });
  const normalized = { ...post, image: toFullImageUrl(post.image) };
  res.json(normalized);
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
