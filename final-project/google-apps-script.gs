/* ===================================================
   Editkaro.in - Google Apps Script Backend
   Stores subscribe & contact form submissions into a
   Google Sheet with two tabs: "Subscribers" and "Contacts".

   SETUP INSTRUCTIONS:
   1. Create a new Google Sheet (e.g. "Editkaro Submissions").
   2. Add two tabs named exactly: Subscribers  and  Contacts
        - Subscribers tab headers (row 1): Timestamp | Email
        - Contacts tab headers (row 1):    Timestamp | Name | Email | Phone | Message
   3. In the Sheet, go to  Extensions > Apps Script.
   4. Delete any boilerplate and paste this entire file.
   5. Click  Deploy > New deployment > type "Web app".
        - Execute as:  Me
        - Who has access:  Anyone
   6. Authorize when prompted, then copy the Web App URL.
   7. Paste that URL into js/forms.js as GOOGLE_SCRIPT_URL.
   =================================================== */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var timestamp = new Date();

    if (data.formType === 'subscribers') {
      var subSheet = ss.getSheetByName('Subscribers');
      subSheet.appendRow([timestamp, data.email]);

    } else if (data.formType === 'contacts') {
      var contactSheet = ss.getSheetByName('Contacts');
      contactSheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.phone || '',
        data.message
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test endpoint to confirm the web app is live.
function doGet() {
  return ContentService
    .createTextOutput('Editkaro.in form endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
