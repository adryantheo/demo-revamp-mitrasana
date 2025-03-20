import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const dummyArticles = [
    {
      id: 1,
      title: 'Jaga Kualitas Nutrisi, Ini Rekomendasi Terbaik Pemberian ASI',
      date: '2025-01-10',
      image: 'http://localhost:5000/uploads/1741438295192.jpg',
      slug: 'rekomendasi-terbaik-asi'
    },
    {
      id: 2,
      title: 'Germas - Gerakan Masyarakat Hidup Sehat',
      date: '2025-10-10',
      image: 'http://localhost:5000/uploads/1741438295192.jpg',
      slug: 'germas-hidup-sehat'
    },
    {
      id: 3,
      title: 'Minum Rebusan Daun Alpukat Setiap Hari? Ini Manfaat dan Efeknya',
      date: '2025-01-10',
      image: 'https://via.placeholder.com/600x400',
      slug: 'manfaat-daun-alpukat'
    },
    {
      id: 4,
      title: '10 Manfaat Daun Katuk: Dari Meningkatkan Produksi ASI Hingga ...',
      date: '2025-10-10',
      image: 'https://via.placeholder.com/600x400',
      slug: 'manfaat-daun-katuk'
    },
    {
      id: 5,
      title: 'Apa itu TOSS TBC dan Kenali Gejala TBC',
      date: '2025-04-18',
      image: 'https://via.placeholder.com/600x400',
      slug: 'toss-tbc-gejala'
    },
    {
        id: 6,
        title: 'Jaga Kualitas Nutrisi, Ini Rekomendasi Terbaik Pemberian ASI',
        date: '2025-01-10',
        image: 'https://via.placeholder.com/600x400',
        slug: 'rekomendasi-terbaik-asi'
      },
      {
        id: 7,
        title: 'Germas - Gerakan Masyarakat Hidup Sehat',
        date: '2025-10-10',
        image: 'https://via.placeholder.com/600x400',
        slug: 'germas-hidup-sehat'
      },
      {
        id: 8,
        title: 'Minum Rebusan Daun Alpukat Setiap Hari? Ini Manfaat dan Efeknya',
        date: '2025-01-10',
        image: 'https://via.placeholder.com/600x400',
        slug: 'manfaat-daun-alpukat'
      },
      {
        id: 9,
        title: '10 Manfaat Daun Katuk: Dari Meningkatkan Produksi ASI Hingga ...',
        date: '2025-10-10',
        image: 'https://via.placeholder.com/600x400',
        slug: 'manfaat-daun-katuk'
      },
      {
        id: 10,
        title: 'Apa itu TOSS TBC dan Kenali Gejala TBC',
        date: '2025-04-18',
        image: 'https://via.placeholder.com/600x400',
        slug: 'toss-tbc-gejala'
      }
  ];

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    fetch('https://your-cms-api.com/articles') // Ganti dengan endpoint CMS
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const currentArticles = dummyArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
//   const totalPages = Math.ceil(articles.length / articlesPerPage);
  const totalPages = Math.ceil(dummyArticles.length / articlesPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-[#324F35] font-semibold mb-12">Artikel Terbaru</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {currentArticles.map((article, index) => (
          <div key={article.id} className={`rounded-lg overflow-hidden shadow-md ${index === 0 ? 'md:col-span-2' : ''}`}>
            <Link to={`/artikel/${article.slug}`}>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-[#324F35] font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-14 h-14 flex items-center justify-center rounded-full outline-1 border transition-all duration-300 text-3xl font-normal ${currentPage === i + 1 ? 'bg-[#324F35] text-white shadow-md' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`} 
            // className={`mx-1 px-3 py-1 rounded-full ${currentPage === i + 1 ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
