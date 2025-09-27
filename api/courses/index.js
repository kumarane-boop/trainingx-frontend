// api/courses/index.js
module.exports = async function (context, req) {
  const courses = [
    { id: 1, title: "Azure Fundamentals", description: "3h" },
    { id: 2, title: "kumaran Essentials", description: "5h" }
  ];

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: courses
  };
};




