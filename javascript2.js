pdfjsLib.getDocument('images2/calendar.pdf').promise.then(function(pdf) {
    // Get the first page of the PDF file (January)
    pdf.getPage(1).then(function(page) {
      // Get the text content of the page
      page.getTextContent().then(function(textContent) {
        // Find the row with the current date
        var currentDate = new Date();
        var dateString = currentDate.toDateString();
        var row = textContent.items.find(function(item) {
          return item.str === dateString;
        });
  
        // Extract the prayer times from the row
        var times = row.str.split('\t')[1].split('  ');
        var fajrTime = times[0];
        var zuhrTime = times[1];
        var asrTime = times[2];
        var maghribTime = times[3];
        var ishaTime = times[4];
  
        // Update the prayer times on the page
        document.querySelector('#home li:nth-child(1) span').textContent = fajrTime;
        document.querySelector('#home li:nth-child(2) span').textContent = zuhrTime;
        document.querySelector('#home li:nth-child(3) span').textContent = asrTime;
        document.querySelector('#home li:nth-child(4) span').textContent = maghribTime;
        document.querySelector('#home li:nth-child(5) span').textContent = ishaTime;
      });
    });
  });