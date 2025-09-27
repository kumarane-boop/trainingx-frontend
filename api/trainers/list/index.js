module.exports = async function (context, req) {
  // For MVP read from public JSON (or inline); later replace with DB
  const trainers = [
    { id: "t1", name: "Alex K", skills: ["Azure","DevOps"], rate: 50, availability: "Weeknights", approved: true }
  ];
  context.res = { status: 200, body: trainers };
};

