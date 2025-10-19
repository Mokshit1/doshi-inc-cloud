import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel(){
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  useEffect(() => {
    // If no token, redirect to login
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);

    // fetch products
    axios.get(import.meta.env.VITE_API_URL + '/api/admin/products', {
      headers: { Authorization: token }
    })
    .then(r => setProducts(r.data))
    .catch(err => {
      // if unauthorized, remove token and redirect
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      } else {
        console.error('Products fetch error', err);
      }
    });

    // fetch quotes
    axios.get(import.meta.env.VITE_API_URL + '/api/admin/quotes', {
      headers: { Authorization: token }
    })
    .then(r => setQuotes(r.data))
    .catch(err => {
      console.error('Quotes fetch error', err);
    })
    .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function handleLogout() {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  }

  if (!token) return null; // early return while redirecting

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <div>
          <button onClick={handleLogout} className="px-3 py-2 bg-neutralgray text-white rounded">Logout</button>
        </div>
      </div>

      {loading ? <p className="mt-4">Loading...</p> : (
      <>
        <section className="mt-4">
          <h2 className="font-semibold">Products</h2>
          <div className="mt-2 space-y-2">
            {products.map(p =>
              <div key={p._id} className="p-2 border rounded flex justify-between">
                <div>
                  <strong>{p.name}</strong><div className="text-sm text-neutralgray">{p.category} — {p.priceRange}</div>
                </div>
                <div>
                  <button className="mr-2">Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            )}
            {products.length === 0 && <div className="text-neutralgray">No products yet.</div>}
          </div>
          <AddProductForm token={token} onAdded={prod => setProducts(prev => [prod, ...prev])} />
        </section>

        <section className="mt-8">
          <h2 className="font-semibold">Quote Requests</h2>
          <div className="mt-2 space-y-2">
            {quotes.map(q =>
              <div key={q._id} className="p-2 border rounded">
                <div className="text-sm text-neutralgray">{q.customerEmail} — {q.productName}</div>
                <div className="mt-1">{q.message || 'No message'}</div>
                <div className="mt-2"><button>Respond</button></div>
              </div>
            )}
            {quotes.length === 0 && <div className="text-neutralgray">No quote requests yet.</div>}
          </div>
        </section>
      </>
      )}
    </div>
  );
}

function AddProductForm({ token, onAdded }){
  const [name,setName] = useState('');
  const [category,setCategory] = useState('Cement');
  const [priceRange,setPriceRange] = useState('Ask');
  const [loading,setLoading] = useState(false);

  function submit(e){
    e.preventDefault();
    setLoading(true);
    axios.post(import.meta.env.VITE_API_URL + '/api/admin/products',
      { name, category, priceRange },
      { headers: { Authorization: token } }
    )
    .then(r => {
      onAdded(r.data);
      setName('');
      setPriceRange('Ask');
    })
    .catch(err => {
      alert('Error adding product');
      console.error(err);
    })
    .finally(()=>setLoading(false));
  }

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Product name" className="border p-2 rounded w-full" />
      <select value={category} onChange={e=>setCategory(e.target.value)} className="border p-2 rounded w-full">
        <option>Cement</option>
        <option>Steel</option>
        <option>PVC Pipes</option>
        <option>AAC Blocks</option>
        <option>Bathware</option>
      </select>
      <input value={priceRange} onChange={e=>setPriceRange(e.target.value)} placeholder="Price range or 'Ask'" className="border p-2 rounded w-full" />
      <button type="submit" className="px-3 py-2 bg-primary text-white rounded" disabled={loading}>{loading ? 'Adding…' : 'Add product'}</button>
    </form>
  );
}
