import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// cria sessão de checkout
app.post("/api/checkout", async (req, res) => {
  try {
    const { plan } = req.body; // "standard" | "premium"
    const priceId =
      plan === "premium" ? process.env.PRICE_PREMIUM : process.env.PRICE_STANDARD;

    if (!priceId) {
      return res.status(400).json({ error: "Price ID inválido/não definido." });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancelado`,
      allow_promotion_codes: true,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Falha ao criar sessão de checkout." });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => {
  console.log(`Stripe server a correr em http://localhost:${port}`);
});
