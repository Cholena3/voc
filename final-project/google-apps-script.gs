/* ===================================================
   Editkaro.in - Google Apps Script Backend
   Stores subscribe & contact form submissions into a
   Google Sheet with two tabs: "Subscribers" and "Contacts".

   This version AUTO-CREATES the tabs and header rows if
   they don't exist, so tab-naming mistakes can't cause
   data to land in the wrong place.

   SETUP / UPDATE INSTRUCTIONS:
   1. Open your Google Sheet > Extensions > Apps Script.
   2. Delete the old code and paste this entire file.
   3. Save, then Deploy > Manage deployments > (edit / pencil)
      > Version: "New version" > Deploy.
      (The /exec URL stays the same, so no website change needed.)
   4. Authorize if prompted.
   =================================================== */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var timestamp = new Date();

    if (data.formType === 'subscribers') {
      var subSheet = getOrCreateSheet(ss, 'Subscribers', ['Timestamp', 'Email']);
      subSheet.appendRow([timestamp, data.email || '']);

    } else if (data.formType === 'contacts') {
      var contactSheet = getOrCreateSheet(ss, 'Contacts', ['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
      contactSheet.appendRow([
        timestamp,
        data.name || '',
        data.email || '',
        data.phone || '',
        data.message || ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', type: data.formType }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Returns the named sheet, creating it (with headers) if it does not exist.
function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

// Optional: test endpoint to confirm the web app is live.
function doGet() {
  return ContentService
    .createTextOutput('Editkaro.in form endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
