const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

const topics = [
  {
    title: "JavaScript",
    content: "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites."
  },
  {
    title: "HTML",
    content: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications."
  },
  {
    title: "CSS",
    content: "CSS stands for Cascading Style Sheets. It is used to describe the presentation of a document written in HTML or XML."
  },
  {
    title: "Python",
    content: "Python is a high-level, interpreted programming language with dynamic semantics. It is known for its ease of readability and simplicity."
  },
  {
    title: "React",
    content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
  },
  {
    title: "VS Code",
    content: "Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs, such as Visual Studio IDE"
  },
  {
    title: "Angular",
    content: "Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with."
  },
];

function showTopics(data) {
  result.innerHTML = data
    .map(
      topic => `
        <div class="topic">
          <h2>${topic.title}</h2>
          <p>${topic.content}</p>
          <button onclick="knowInDetail('${topic.title}')">Know in detail</button>
        </div>
      `
    )
    .join("");
}

function knowInDetail(topic) {
  const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(topic)}`;
  window.open(url, '_blank');
}

function searchTopics(term) {
  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(term.toLowerCase())
  );
  showTopics(filteredTopics);
}

// Initially display all topics
showTopics(topics);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchTopics(searchTerm);
  }
});
