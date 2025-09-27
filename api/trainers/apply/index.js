module.exports = async function (context, req) {
  // Get current user from SWA headers
  const clientPrincipalHeader = req.headers["x-ms-client-principal"];
  let user = null;
  if (clientPrincipalHeader) {
    const decoded = Buffer.from(clientPrincipalHeader, "base64").toString("ascii");
    user = JSON.parse(decoded);
  }

  if (!user) {
    context.res = { status: 401, body: { error: "Not authenticated" } };
    return;
  }

  const body = req.body || {};
  const application = {
    id: `app_${Date.now()}`,
    userId: user.userId,
    email: user.userDetails,
    name: body.name,
    skills: body.skills || [],
    rate: body.rate || 0,
    availability: body.availability || "",
    approved: false,
    createdAt: new Date().toISOString()
  };

  // MVP: log it; later save to Cosmos DB or Storage
  context.log("Trainer application received:", application);

  context.res = { status: 200, body: { ok: true, application } };
};

