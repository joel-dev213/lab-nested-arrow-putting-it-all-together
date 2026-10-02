const createLoginTracker = (userInfo) => {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return  "Account locked due to too many failed login attempts.";
    }
if (passwordAttempt === userInfo.password) {
      return "Login successful!";
  }
  return `Attempt ${attemptCount}: Incorrect password.`;
  };
};

const login = createLoginTracker({ username: "user1", password: "password123" });
console.log(login("wrong"));
consolle.log(login("password123"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker }),
  login
};
