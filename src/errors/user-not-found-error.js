export function userNotFoundError() {
  return {
    name: "UserNotFoundError",
    message: "No user registered with this email.",
  };
}