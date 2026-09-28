window.HERMES_SITE_DATA={
features:[
["◉","Secure pairing","Pair your phone to your own Hermes instance with a short-lived QR flow and explicit confirmation."],
["↔","Multiple instances","Pair more than one Hermes deployment and switch explicitly between them."],
["◌","Bot Chat continuity","Open the same Bot Chat Hermes Desktop shows and follow the conversation from your phone."],
["↑","Safe sending","Messages send only when the phone is synchronized, with duplicate and stale-send protection."],
["⌁","Live updates","See new Bot Chat messages while the conversation is open, including messages from Desktop."],
["▣","Offline copy","Keep the last conversation you loaded readable offline in encrypted device storage."]
],
now:["Secure pairing","Multiple Hermes instances","Bot list and access requests","Mirrored Bot Chat","Safe sends and live updates","Offline conversation copy"],
next:["Tool output","Approvals and decisions","Copy conversation and code","Read aloud and voice","Cron management","Bot models and lifecycle"],
parity:["All chat tabs","Full mobile approvals","Screen viewing","Checkpoint restore","Chat branching","Two-way live voice","Instant change feed"],
faq:[
["What do I need to use Hermes Bot Mobile?","A compatible Hermes Agent installation, the HMP Gateway plugin, Tailscale running on the Hermes host and your phone, and the Hermes Bot Mobile beta."],
["Does my Hermes instance need to be exposed to the internet?","No. The beta is designed for a private Tailscale connection. HMP runs alongside your Hermes deployment."],
["Why do I pair my phone and then approve bots separately?","They establish different trust. Pairing connects this device to the Hermes instance. Bot authorization controls which profiles and Bot Chats the device may access."],
["Can I connect more than one Hermes installation?","Yes. Pair multiple Hermes instances and switch between them. The active instance is always explicit, so you know exactly which Hermes you are viewing or configuring."],
["Can I use Hermes Desktop and Hermes Bot Mobile together?","Yes. The beta mirrors each bot's Bot Chat and is designed to coexist with Desktop. Some deeper cross-client capabilities still depend on Hermes changes."],
["What happens when my connection drops?","Loaded conversations remain readable offline. The app is deliberately conservative about retrying sends so an old instruction does not unexpectedly execute after the conversation has progressed."],
["Why is setup terminal-driven?","This is an early beta. The current flow makes pairing and authorization explicit and testable. A guided HMP installer is planned to remove most manual configuration."],
["Where does my conversation data go?","Bot Chat traffic is designed to travel directly between your phone and your Hermes host over Tailscale. Hermes remains the source of truth."]
]};