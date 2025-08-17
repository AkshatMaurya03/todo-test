<h1 align="center">📝 Todo App</h1>

<p align="center">
  A simple <b>Todo Application</b> built with 
  <b>React, Express, Mongoose, and Zod</b>.  
  This project demonstrates a full-stack setup with a MongoDB backend and a React frontend.
</p>

<hr/>

<h2>🚀 Tech Stack</h2>
<ul>
  <li><b>Frontend:</b> React (Vite)</li>
  <li><b>Backend:</b> Express.js, Mongoose, Zod</li>
  <li><b>Database:</b> MongoDB Atlas</li>
</ul>

<h2>📂 Project Structure</h2>

<pre>
├── backend        # Express + Mongoose + Zod
│   ├── db.js      # MongoDB connection
│   └── index.js   # Backend server
│
├── frontend       # React (Vite)
│   └── src        # React components
│
└── README.md
</pre>

<h2>⚙️ Setup & Run</h2>

<h3>🔧 Backend</h3>
<pre>
cd backend
npm install
</pre>

<p>Edit <code>db.js</code> and replace MongoDB connection with your credentials:</p>
<pre>
mongoose.connect("mongodb+srv://NAME:PASSWORD@cluster0.mongodb.net/DATABASE_NAME")
</pre>
<ul>
  <li><code>NAME</code> → your MongoDB username</li>
  <li><code>PASSWORD</code> → your MongoDB password</li>
  <li><code>DATABASE_NAME</code> → your database name</li>
</ul>

<p>Run backend server:</p>
<pre>
node index.js
</pre>

<h3>🎨 Frontend</h3>
<pre>
cd frontend
npm install
npm run dev
</pre>

<h2>✅ Usage</h2>
<ol>
  <li>Add a <b>title</b> and <b>description</b> in the UI.</li>
  <li>Open <b>Inspect → Network</b> tab in your browser.</li>
  <li>Click on <code>todo</code> request and check the <b>Response</b> section.</li>
  <li>Verify the data in your MongoDB database.</li>
  <li>View all todos at: <br/>
    <code>http://localhost:3000/todos</code>
  </li>
</ol>

<h2>📌 API Endpoints</h2>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/todos</code></td>
    <td>Get all todos</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/todo</code></td>
    <td>Create a new todo</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td><code>/todo/:id</code></td>
    <td>Update a todo by ID</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td><code>/todo/:id</code></td>
    <td>Delete a todo by ID</td>
  </tr>
</table>

<h2>🤝 Contributing</h2>
<p>
Pull requests are welcome! If you’d like to improve the project,
please fork the repo and submit a PR.
</p>

<h2>📜 License</h2>
<p>
This project is licensed under the <b>MIT License</b>.
</p>
