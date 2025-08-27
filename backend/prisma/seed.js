const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const rawPass = process.env.ADMIN_PASSWORD;
  const password = await bcrypt.hash(rawPass, 10);

  const exists = await prisma.user.findUnique({ where: { email } });
  if (!exists) {
    await prisma.user.create({ data: { email, password } });
    console.log('Admin criado:', email);
  } else {
    console.log('Admin já existe.');
  }
}

main().finally(() => prisma.$disconnect());
