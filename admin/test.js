// test.js
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");
  const users = await response.json();

  console.log("Số lượng user:", users.length);
  console.log("Danh sách username:");
  users.forEach(u => console.log("-", u.username));
}

fetchUsers().catch(err => console.error("❌", err));

