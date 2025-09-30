import { useState } from 'react'
import QRCode from 'qrcode'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQRCode = async () => {
    if (!text.trim()) {
      alert('Please enter some text to generate QR code')
      return
    }

    try {
      const url = await QRCode.toDataURL(text)
      setQrCodeUrl(url)
    } catch (error) {
      console.error('Error generating QR code:', error)
      alert('Error generating QR code. Please try again.')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateQRCode()
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">QR Code Generator</h1>
              
              <div className="mb-4">
                <label htmlFor="textInput" className="form-label">
                  Enter text to convert to QR code:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="textInput"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your text here..."
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={generateQRCode}
                  >
                    Generate QR Code
                  </button>
                </div>
              </div>

              {qrCodeUrl && (
                <div className="text-center">
                  <h5 className="mb-3">Your QR Code:</h5>
                  <div className="qr-code-container">
                    <img
                      src={qrCodeUrl}
                      alt="Generated QR Code"
                      className="img-fluid border rounded"
                      style={{ width: '300px' }}
                    />
                  </div>
                  <div className="mt-3">
                    <a
                      href={qrCodeUrl}
                      download="qrcode.png"
                      className="btn btn-success"
                    >
                      Download QR Code
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
