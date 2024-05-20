const link = document.getElementById("url")
const downbtn = document.getElementById("downloadBtn")
const apikey = "oQ1q5abSxx6Pzslva8CFCfGWR0JL8hToIjV66gwxMeog1OKkRCUjfRX2dRqF9k9Y"

downbtn.addEventListener("click",downloadPdf)

function downloadPdf() {
    const url = encodeURIComponent(link.value);
    const api = `https://api.html2pdf.app/v1/generate?url=${url}&apiKey=${apikey}`;

    fetch(api)
      .then(response => {
        if (response.ok) {
          // Handle the response based on your requirements
          return response.blob();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then(blob => {
        // You can create a link and trigger a download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'downloaded.pdf';
        link.click();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }