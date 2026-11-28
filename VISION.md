# Vision

Voca exists so that someone mid-task can speak, get text in the focused field, and know the speech-to-text model ran on a machine they own.
It serves people who already have Linux, macOS, Windows, or a phone, and who will not open a Voca account to dictate.
It turns speech into text at the cursor after a model is on disk, or after they point a client at self-hosted VocaGateway.
It owns exactly one thing: private speech-to-text into the place they are already typing.

## On a machine they own

On-device speech-to-text is the default path.
After a model is downloaded, supported on-device modes keep the model and the audio on that phone or computer.
A gateway is not required for that path.
When someone configures VocaGateway, audio leaves the client and travels to the self-hosted machine they selected.
That path is never described as on-device.
There is no required Voca account and no hosted Voca speech cloud.
A change that adds a Voca-operated relay, a required login, or a hosted STT API is off mission.

## The focused field

Text lands where the user is already typing when the platform allows it.
Native insertion is the default. Clipboard paste is a fallback, not the bus.
The product is the transcript in that field, not a dashboard of what they said.
Shipped cleanup is rule-based, on-device, and contract-bound: no style adds, removes, or substitutes a word.
Snippets expand as literals after styles, so a style cannot rewrite a snippet.

## Honesty over marketing

Public status labels live in PRODUCT.md and must match live artifacts.
Copy does not say 100% offline, fully offline, or that data never leaves the device.
The on-device tag is after the model is present, not a synonym for offline.
Unsigned Windows stays unsigned until a real signed build exists.
Numbers, Store listings, medical claims, and feature parity are not invented.
VISION.md is the acceptance policy. PRODUCT.md is the source of truth for status and licenses. ENTERPRISE.md is the enterprise and monetization strategy. Product READMEs and sites follow PRODUCT.md.

## Fail closed

Speech models are pinned. An unpinned model is refused.
Catalog rows that do not transcribe stay out until they work.
Installers and About copy do not invent GPUs, signed builds, or auto-update.
Desktop clients do not launch VocaGateway yet. That surface stays Planned until it ships.
MCP, when it exists, talks to the self-hosted gateway, not to on-device engines as a Voca cloud.

## Built in public

Each shipping product names its license in PRODUCT.md. The family default is AGPL-3.0.
Work is built in public. Coding agents do not merge.
A keep-no-records option is in the spirit of the project.

## Scope

Voca is not a Voca-hosted speech service.
It is not a meeting notetaker and not a recording-transcript product.
It is not a TTS catalog.
Each platform keeps a native client. Family language is shared. Runtimes are not.
Personal audio stays on the machine the user chose.

A change aligns when it deepens on-device dictation, puts text in the focused field without stealing the clipboard, makes a network or status boundary more honest, fails closed on an unpinned or non-working model, or names a license and a path a user already owns.
A change should be resisted when it calls gateway mode on-device, requires a Voca account, ships a hosted STT cloud, lets a model add or substitute words in the insert, turns dictation into meetings or history-search, invents status, or grows a dashboard where the focused field was the product.
