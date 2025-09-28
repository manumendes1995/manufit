import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY, STRIPE_PRICE_ID } from "./config";

export async function startCheckout() {
  if (!STRIPE_PUBLISHABLE_KEY || !STRIPE_PRICE_ID) {
    alert("Pagamento indisponível no momento. Contacta o suporte.");
    return;
  }
  const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
  const successUrl = window.location.origin + import.meta.env.BASE_URL + "sucesso";
  const cancelUrl  = window.location.origin + import.meta.env.BASE_URL + "cancelado";
  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
    successUrl,
    cancelUrl
  });
}
