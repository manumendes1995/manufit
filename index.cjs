const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ Falta STRIPE_SECRET_KEY no .env");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/api/checkout", async (req, res) => {
  try {
    const { plan } = req.body;
    const priceId =
      plan === "premium" ? process.env.PRICE_PREMIUM : process.env.PRICE_STANDARD;

    if (!priceId) return res.status(400).json({ error: "Price ID inválido." });

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancelado`,
      allow_promotion_codes: true,
    });

    res.json({ url: session.url });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Falha ao criar sessão" });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`✅ Stripe server em http://localhost:${port}`));
