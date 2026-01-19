Bug ID: BUG-001
Title: Unauthorized user can access /contacts page directly

Severity: Critical  
Priority: P1  
Environment:
- URL: https://thinking-tester-contact-list.herokuapp.com
- Browser: Chrome 131
- OS: Windows 10   
- Build: Public deployment  

Description:
The /contacts page is accessible directly via URL manipulation without authentication.  
This exposes user data and breaks authorization rules.

Steps to Reproduce:
1. Open a private/incognito browser.
2. Without logging in, navigate to:
   https://thinking-tester-contact-list.herokuapp.com/contacts
3. Observe the page access.

Expected Result:
User must be redirected to /login and NOT be able to access contacts.

Actual Result:
The contacts page is accessible (or loads partially) without authentication.

Impact:
- Major security vulnerability
- Unauthorized user can see contact list UI
- Possible data leakage

Status: New  
Reported By: QA Engineer  
