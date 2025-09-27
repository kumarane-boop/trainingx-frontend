module.exports = async function (context, req) {
  const courses = [
    { id: 1, title: "Azure Basics", description: "3h" },
    { id: 2, title: "Vue.js Essentials", description: "5h" }
  ];

  context.res = { status: 200, body: courses };
};



