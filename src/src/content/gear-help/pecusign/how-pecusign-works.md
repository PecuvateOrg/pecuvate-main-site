---
title: How PecuSign works
description: From a finished document to a sealed, signed copy, step by step, and what happens to your files.
order: 1
---

PecuSign is the signing Gear from Pecuvate. Your AI app (Claude, ChatGPT or another) writes the
document. PecuSign then collects the signatures, seals the signed copy, and gives it back to you.

## The process

### 1. Prepare the document
You ask your AI app to send a document for signing, or you use the PecuSign dashboard. You give it:
- the finished PDF (up to 20 MB);
- each signer's name and email address, and their role if you want it shown (for example "Director");
- the order, if it matters. Signers are grouped in **steps**: everyone in a step signs at the same
  time, and the next step starts when they have all signed. Put everyone in one step to sign in any
  order.

PecuSign saves this as a **draft**. Nothing is sent yet.

### 2. Send
Sending always needs a person to approve it. Your AI app shows you who will be emailed and asks you to
confirm before it sends. The signers in the first step receive an email with their own signing link.
The email shows your organisation's name.

### 3. Sign
Each signer:
1. opens their link and reads the document. They see its **fingerprint** (a code unique to this exact
   file), so everyone can be sure they are signing the same document;
2. agrees to sign electronically, types their name, and can draw their signature;
3. enters a code sent to their email. This proves they control that email address.

When everyone in a step has signed, the next step's signers are emailed automatically.

### 4. Done
After the last signature, PecuSign builds **one signed PDF**: your original document, a page with
everyone's signatures, and a certificate listing what happened and when (sent, opened, signed, with
times and addresses). It also gets an **independent timestamp** for that PDF from a trusted
timestamp service: the `.tsr` file.

Every signer, and the person who sent the document, receives both files by email.

### 5. Save your copy
**We do not keep a copy of your documents.** Download the signed PDF and the `.tsr` file and save
them somewhere safe. You can download them from the email, from the dashboard, or by asking your AI
app, for **30 days after the document is completed**. After that we delete the files. We keep only the
document's fingerprint and the record of what happened, so we can still confirm whether a copy is
genuine, but we cannot send you a new one.

Want us to keep your documents? **Paid storage** is available: we keep your signed documents locked
so that no one, including us, can change or delete them for seven years.

## While a document is out for signing
- **Reminders:** a signer who has not signed after 3 days is reminded by email, up to 3 times.
- **Links** work for 14 days and stop working once the signer has signed. A reminder sends a fresh link.
- **Cancelling:** you can cancel (revoke) a document that has not been fully signed. Every open link
  stops working immediately. As with completed documents, the files are deleted after 30 days unless
  you have paid storage.

## Questions

**A signer did not get the email.**
Ask them to check spam or junk, and to look for an email from "<your organisation> via PecuSign".
You can send a reminder at any time from the dashboard or your AI app.

**Can two signers use the same email address?**
No. Each signer needs a mailbox that only they can read. The emailed code is what proves who signed, so
if two people share a mailbox, either of them could sign as the other. Shared addresses like
info@ or office@ should not be used for signing.

**A signer entered the wrong code too many times.**
After 5 wrong attempts the code stops working. The signer asks for a new code on the signing page.
Codes last 10 minutes.

**How do I prove a signed copy is genuine?**
The certificate inside the PDF shows who signed and when. The `.tsr` file proves the PDF existed in
exactly this form at the time it was completed; any change to the PDF, even one character, breaks it.
We also keep the document's fingerprint, so we can confirm a copy matches our record.

**Is an electronic signature legally valid?**
In the UK, electronic signatures are recognised under the Electronic Communications Act 2000, and
PecuSign records the evidence for each one: email control, consent, typed and drawn signature,
times, the document's fingerprint and an independent timestamp. Some documents, such as certain deeds,
have extra formality rules. Check what your document needs.

**I lost my copy after 30 days.**
Without paid storage we cannot re-send it, because we no longer have it. Check the completion email,
which every signer received. Any signer can share their copy.

**Can my AI app send documents without me?**
No. Sending and cancelling always show you a preview and need your confirmation.
