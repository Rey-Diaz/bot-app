// src/Components/BotpressChat.js

import React from 'react';
import styles from '../MainContent/MainContent.module.css'; // You can adjust this if needed

function BotpressChat() {
    return (
        <div className={styles.container}>
            <div className={styles.absoluteInset}>
                <div className={styles.centerDiv}>
                    <iframe
                        title="Botpress Webchat"
                        style={{ border: 'none' }}
                        srcDoc={`
                            <body>
                                <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
                                <script>
                                    window.botpressWebChat.init({
                                        'composerPlaceholder': 'Chat with bot',
                                        'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                                        'botName': 'Name',
                                        'botId': '8b6780df-34f7-4066-a4a6-bf25db7d8cfb',
                                        'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                                        'messagingUrl': 'https://messaging.botpress.cloud',
                                        'clientId': '8b6780df-34f7-4066-a4a6-bf25db7d8cfb',
                                        'enableConversationDeletion': true,
                                        'showPoweredBy': false,
                                        'className': 'webchatIframe',
                                        'containerWidth': '100%25',
                                        'layoutWidth': '100%25',
                                        'hideWidget': true,
                                        'showCloseButton': false,
                                        'disableAnimations': true,
                                        'closeOnEscape': false,
                                        'showConversationsButton': false,
                                        'enableTranscriptDownload': false,
                                        'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/608eef2b-a91f-4a7f-bd0c-215d54874dbd/v75889/style.css'
                                    });
                                    window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
                                </script>
                            </body>
                        `} // iframe content for Botpress chat
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default BotpressChat;
