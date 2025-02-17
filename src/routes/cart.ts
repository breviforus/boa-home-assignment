import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/save-cart", async (req, res) => {
  const { cartId, items } = req.body;

  try {
    await prisma.savedCart.create({
      data: { cartId, items },
    });
    res.status(200).send({ message: "Cart saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to save cart." });
  }
});

export default router;