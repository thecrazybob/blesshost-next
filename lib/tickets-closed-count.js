const apiurl = `${process.env.WHMCS_API_URL}?identifier=${process.env.WHMCS_API_IDENTIFIER}&secret=${process.env.WHMCS_API_SECRET}&accesskey=${process.env.WHMCS_API_ACCESS_KEY}&action=GetTicketCounts&includeCountsByStatus=true&responsetype=json`;

async function fetchCount() {
  const res = await fetch(apiurl, { method: "POST" });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.status.closed.count ?? "1392";
}

export default async function getClosedTicketsCount() {
  const data = await fetchCount();
  return data;
}
