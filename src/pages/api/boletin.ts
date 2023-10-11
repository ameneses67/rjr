import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  let headersList = {
    Accept: "application/json",
    Authorization: import.meta.env.ACCESS_TOKEN,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: email,
    lists: [402269],
  });

  let response = await fetch("https://api.sendfox.com/contacts", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);

  return redirect("/boletin/suscrito", 307);
};
