export async function iniciarCheckout(plan) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error('Falha ao iniciar checkout: ' + t);
  }
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    throw new Error('Resposta inválida do servidor');
  }
}
