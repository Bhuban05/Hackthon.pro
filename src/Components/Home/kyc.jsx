export default function KYCPage() {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
  
        {/* Navbar */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Tourist Currency Converter</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#">home</a>
            <a href="#">transaction</a>
            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>kyc</a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button>🔍</button>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          </div>
        </nav>
  
        {/* KYC Verification */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>KYC Verification</h1>
  
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Upload your document</h2>
  
            <button
              style={{ marginTop: '1rem', backgroundColor: '#6C63FF', color: 'white', padding: '0.5rem 1.5rem', border: 'none', borderRadius: '5px' }}
            >
              Upload document
            </button>
  
            <div style={{ marginTop: '1rem', color: '#666' }}>
              Or drag and drop your files here
              <br />
              We only support <b>.jpg</b>, <b>.jpeg</b> and <b>.png</b> files
            </div>
  
            <div style={{ marginTop: '1rem', color: '#999' }}>
              Make sure your document is:
            </div>
          </div>
        </div>
  
        {/* Upload Tips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
  
          {/* Tip Card */}
          {[
            { title: 'Clear Images', desc: 'Ensure documents are clear\nAvoid glare or shadows', img: 'https://via.placeholder.com/150' },
            { title: 'Original Format', desc: 'Upload original documents\nDo not use edited files', img: 'https://via.placeholder.com/150' },
            { title: 'File Formats', desc: 'Accepted formats: JPEG, PDF\nMax size: 5MB', img: 'https://via.placeholder.com/150' },
            { title: 'All Pages', desc: 'Upload all pages\nEnsure completeness', img: 'https://via.placeholder.com/150' },
            { title: 'Photo Clarity', desc: 'Ensure clear scans\nAvoid glare or shadows', img: 'https://via.placeholder.com/150' },
            { title: 'Proper Alignment', desc: 'Crop edges properly\nAlign document straight', img: 'https://via.placeholder.com/150' },
            { title: 'Text Quality', desc: 'Text must be legible\nNo blurry fonts', img: 'https://via.placeholder.com/150' },
            { title: 'Full Visibility', desc: 'Show entire document\nNo parts cut off', img: 'https://via.placeholder.com/150' }
          ].map((tip, index) => (
            <div key={index} style={{ width: '250px', border: '1px solid #eee', borderRadius: '10px', padding: '1rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>{tip.title}</h3>
              <p style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>{tip.desc}</p>
              <img src={tip.img} alt="Tip" style={{ width: '100%', height: '120px', objectFit: 'cover', marginTop: '1rem', borderRadius: '5px' }} />
            </div>
          ))}
  
        </div>
  
        {/* Footer Icons */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Accepted ID types:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <span>🆔</span>
            <span>📄</span>
            <span>📷</span>
            <span>🖨️</span>
            <span>📑</span>
          </div>
        </div>
  
      </div>
    )
  }
  