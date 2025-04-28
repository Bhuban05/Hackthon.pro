// export default function TransactionPage() {
//     return (
//       <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        
//         {/* Navbar */}
//         <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '2rem' }}>
//           <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Tourist Currency Converter</div>
//           <div style={{ display: 'flex', gap: '2rem' }}>
//             <a href="#">home</a>
//             <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>transaction</a>
//             <a href="#">kyc</a>
//           </div>
//           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//             <button>🔍</button>
//             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
//           </div>
//         </nav>
  
//         {/* Exchange Rate */}
//         <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//           <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>1 USD = 132.78 NPR</div>
//           <div style={{ color: '#666', marginTop: '0.5rem' }}>Today's Rates</div>
//         </div>
  
//         {/* Currency Converter */}
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h2>Currency Converter</h2>
//           <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
//             <input
//               type="text"
//               placeholder="Amount in USD"
//               style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
//             />
//             <button
//               style={{ backgroundColor: '#6C63FF', color: 'white', border: 'none', borderRadius: '5px', padding: '0.5rem 1rem' }}
//             >
//               Convert
//             </button>
//           </div>
//         </div>
  
//         {/* Recent Transactions */}
//         <div style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
//           Recent Transactions
//         </div>
//         <div style={{ display: 'flex', gap: '1rem' }}>
          
//           {/* Transaction Card 1 */}
//           <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '1rem', width: '250px' }}>
//             <div style={{ fontWeight: 'bold' }}>March 15</div>
//             <div style={{ marginTop: '0.5rem' }}>Grocery Store Purchase</div>
//             <div style={{ marginTop: '0.5rem', color: '#666' }}>$45.89 - Completed</div>
//             <img
//               src="https://randomuser.me/api/portraits/men/45.jpg"
//               alt="Transaction"
//               style={{ width: '100%', height: '100px', objectFit: 'cover', marginTop: '1rem', borderRadius: '5px' }}
//             />
//             <button style={{ marginTop: '1rem', border: '1px solid #6C63FF', color: '#6C63FF', padding: '0.5rem 1rem', borderRadius: '5px', background: 'none' }}>
//               View Details
//             </button>
//           </div>
  
//           {/* Transaction Card 2 */}
//           <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '1rem', width: '250px' }}>
//             <div style={{ fontWeight: 'bold' }}>March 14</div>
//             <div style={{ marginTop: '0.5rem' }}>USD to EUR Conversion</div>
//             <div style={{ marginTop: '0.5rem', color: '#666' }}>€85.60 Received</div>
//             <img
//               src="https://images.unsplash.com/photo-1606326608691-118ca6b6e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
//               alt="Transaction"
//               style={{ width: '100%', height: '100px', objectFit: 'cover', marginTop: '1rem', borderRadius: '5px' }}
//             />
//             <button style={{ marginTop: '1rem', border: '1px solid #6C63FF', color: '#6C63FF', padding: '0.5rem 1rem', borderRadius: '5px', background: 'none' }}>
//               View Details
//             </button>
//           </div>
  
//           {/* Transaction Card 3 */}
//           <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '1rem', width: '250px' }}>
//             <div style={{ fontWeight: 'bold' }}>March 13</div>
//             <div style={{ marginTop: '0.5rem' }}>E-commerce Purchase</div>
//             <div style={{ marginTop: '0.5rem', color: '#666' }}>$120.00 - Pending</div>
//             <img
//               src="https://images.unsplash.com/photo-1600793334944-838f1f6364f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
//               alt="Transaction"
//               style={{ width: '100%', height: '100px', objectFit: 'cover', marginTop: '1rem', borderRadius: '5px' }}
//             />
//             <button style={{ marginTop: '1rem', border: '1px solid #6C63FF', color: '#6C63FF', padding: '0.5rem 1rem', borderRadius: '5px', background: 'none' }}>
//               View Details
//             </button>
//           </div>
  
//         </div>
  
//       </div>
//     )
//   }
  