<!DOCTYPE html>
<html>
  <head>
    <title>Image Encryption</title>
  </head>
  <body>
    <h1>Image Encryption</h1>
    
    <h2>Encrypt Image</h2>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="image" />
      <button type="submit">Encrypt Image</button>
    </form>
    
    <h2>Decrypt Image</h2>
    <form action="/decrypt" method="post" enctype="multipart/form-data">
      <input type="file" name="encryptedImage" />
      <input type="text" name="key" placeholder="Enter Secure Key" />
      <button type="submit">Decrypt Image</button>
    </form>
  </body>
</html>
