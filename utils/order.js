export const createVIPOrder = async (botName) => {
  const res = await fetch("/api/orders/vip/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderDetails }),
  });

  return res.json();
};

export const createNormalOrder = async (order) => {
  const res = await fetch("/api/orders/normal/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderDetails }),
  });

  return res.json();
};
