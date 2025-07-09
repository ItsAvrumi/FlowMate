
# FlowMate Chrome Extension

FlowMate is a lightweight Chrome Extension that lets you connect your browser actions to custom workflows in [n8n](https://n8n.io).

## 🧩 Features

- Click to launch webhook-based flows
- Test your automations right from your browser
- Extend and customize with ease

## 🚀 Setup

1. Clone the repository:
```bash
<<<<<<< HEAD
git clone https://github.com/ItsAvrumi/FlowMate.git
=======
git clone https://github.com/yourusername/flomate-extension.git
>>>>>>> 9971745fb7d7ce1547e55253da408667c62a7cc1
```

2. Go to Chrome > Extensions > Load unpacked > Select this folder.

<<<<<<< HEAD
3. Make sure your domain of n8n server is saved in the settings along with the API key created 

## 📁 File Structure
- Need to display the file stracture
=======
3. Make sure your webhook URL is updated inside `background.js`.

## 📁 File Structure

- `popup.html` – The popup UI
- `popup.js` – Handles popup actions
- `background.js` – Background worker that sends webhook calls
- `manifest.json` – Extension configuration
- `content.js` – (Optional) for page interaction

## 🔧 Customize

Update the `WEBHOOK_URL` constant in `background.js` to point to your own n8n webhook.
>>>>>>> 9971745fb7d7ce1547e55253da408667c62a7cc1

## 🛠 Future

- OAuth authentication
- Flow list sync from n8n
- Success/failure feedback

---

Built with ❤️ for no-code/low-code devs.
