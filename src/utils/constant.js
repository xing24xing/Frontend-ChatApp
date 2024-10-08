export const USER_API = `${BASE_URL}/api/v1/user`
export const MSG_API = `${BASE_URL}/api/v1/message`
export const BASE_URL = "https://backend-chatapp-0c4r.onrender.com"
// utils/playNotificationSound.js
export const playNotificationSound = () => {
    const audio = new Audio('/ding.mp3');
    audio.play().catch((error) => console.error("Audio play error:", error));
};
