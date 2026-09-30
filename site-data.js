window.HERMES_SITE_DATA={
features:[
["◉","Secure pairing","Pair your phone to your Hermes instance with a short-lived QR flow and explicit confirmation."],
["↔","Multiple Hermes instances","Pair more than one deployment and switch explicitly between them."],
["◌","Bot Chat","Open the same Bot Chat Hermes Desktop shows and continue the conversation from your phone."],
["↑","Guarded sending","Messages are protected against stale context and duplicate delivery when mobile connectivity changes."],
["▣","Offline reading","Keep recently loaded Bot Chats readable when your phone loses its connection."],
["◍","Voice input & read aloud","Dictate messages and have replies read aloud from the mobile experience."],
["⌕","Bot Chat search","Search across Bot Chats available on your phone to quickly find prior context."],
["◷","Scheduled jobs","View and edit scheduled jobs with continuity back to your Hermes instance."],
["◇","Default model selection","Choose the default model used by a bot directly from mobile."]
],
now:["Secure pairing","Multiple Hermes instances","Bot Chat","Guarded sending","Offline reading","Voice input and read aloud","Search across phone Bot Chats","Scheduled jobs with editing and continuity","Default-model selection"],
next:["Tool output polish","Approvals and decisions","Copy conversation and code","Expanded mobile controls"],
parity:["All Desktop chat tabs","Full cross-surface approvals","Screen viewing","Checkpoint restore and regenerate","Chat branching","Two-way Hermes voice","Instant change feed"],
future:[
["Tabs","All Desktop chat tabs","Hermes needs a server-side record of each bot's tabs and a supported way to open them remotely."],
["Approvals","Full cross-surface approvals","Hermes needs approval and question events exposed consistently to session chat."],
["Screen","Watch the bot's screen","Hermes needs screen streaming exposed through the API server with Desktop-equivalent access control."],
["History","Restore and branch chats","Hermes needs supported rewind and branch endpoints that preserve the original conversation."],
["Realtime","Instant updates","Hermes needs a change feed so mobile can move beyond polling."],
["Voice","Full two-way Hermes voice","Hermes needs voice and speech endpoints that use the bot's configured voices."]
],
faq:[
["What do I need to use Hermes Bot Mobile?","A compatible Hermes Agent installation, the HMP Gateway plugin, Tailscale running on the Hermes host and your phone, and the Hermes Bot Mobile beta."],
["Can I join the iOS beta now?","The TestFlight invitation is reserved and waiting for Apple review. The button is marked pending until Apple accepts external testers."],
["Can I join the Android beta now?","The Google Play testing URL is reserved, but no testing release is published yet. The button remains pending until the release accepts testers."],
["Does my Hermes instance need to be exposed to the internet?","No. The beta is designed for a private Tailscale connection. HMP runs alongside your Hermes deployment."],
["Why do I pair my phone and then approve bots separately?","They establish different trust. Pairing connects this device to the Hermes instance. Bot authorization controls which profiles and Bot Chats the device may access."],
["Can I connect more than one Hermes installation?","Yes. Pair multiple Hermes instances and switch between them. The active instance is always explicit."],
["What happens when my connection drops?","Loaded conversations remain readable offline. Guarded sending is deliberately conservative so an old instruction does not unexpectedly execute after the conversation has progressed."],
["Are the screenshots real user data?","No. The screenshots on this site are synthetic demo previews and contain no live host, account, or chat data."],
["Why are some features listed as future?","Some Desktop-parity features need additional Hermes APIs or events. We track those separately rather than pretending the mobile client can safely recreate Hermes behavior."]
]};