document.addEventListener("DOMContentLoaded", function() {
    // Create the footer with credit and buttons
    const footer = document.createElement('div');
    footer.innerHTML = `
        <div class="credit-footer">
            <strong>CODE BY 𒁂𓄂❥.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡𒁂</strong><br><br>
            <a href="https://whatsapp.com/channel/0029VahpgB7L7UVXkL6oMw1k" target="_blank" class="whatsapp">Join WhatsApp</a>
            <a href="https://t.me/+94FrpOJan0plZGQ0" target="_blank" class="telegram">Join Telegram</a>
        </div>
    `;

    // Append it to the body of the page
    document.body.appendChild(footer);

    // Add CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .credit-footer {
            background: #111;
            padding: 20px;
            text-align: center;
            border-top: 2px solid #00bcd4;
            box-shadow: 0 -2px 10px rgba(0,255,255,0.2);
            font-size: 16px;
            margin-top: 40px;
            position: fixed;
            bottom: 0;
            width: 100%;
            left: 0;
            z-index: 1000;
        }
        .credit-footer strong {
            color: #00bcd4;
        }
        .credit-footer a {
            text-decoration: none;
            margin: 10px;
            display: inline-block;
            padding: 12px 24px;
            border-radius: 6px;
            font-weight: bold;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .credit-footer .whatsapp {
            background: #25D366;
            color: white;
        }
        .credit-footer .telegram {
            background: #0088cc;
            color: white;
        }
        .credit-footer a:hover {
            transform: scale(0.9);
            box-shadow: 0 4px 8px rgba(0,255,255,0.4);
        }
    `;
    document.head.appendChild(style);
});
