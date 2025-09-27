module.exports = async function (context, req) {
  // For now return static data; later connect to DB
  const courses = [
    { id: 1, title: "Azure Fundamentals", description: "Learn Microsoft Azure basics" },
    { id: 2, title: "Vue.js for Beginners", description: "Build modern SPAs with Vue 3" },
    { id: 3, title: "DevOps Essentials", description: "CI/CD pipelines and GitHub Actions" }
  ];

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: courses
  };
};

