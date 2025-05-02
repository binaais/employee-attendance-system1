export async function loginUser(username, password) {
  const users = [
    { username: 'admin', password: 'pass12', role: 'admin', userId: 1, cardID: '1234' },
    { username: 'entela', password: 'pass123', role: 'employee', userId: 2, cardID: '12345' },
    { username: 'blina', password: 'pass456', role: 'employee', userId: 3, cardID: '123456' },
    { username: 'user', password: 'user123', role: 'employee', userId: 4, cardID: '9999' }
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return {
      success: true,
      userId: user.userId,
      role: user.role,
      cardID: user.cardID
    };
  } else {
    return { success: false };
  }
}
