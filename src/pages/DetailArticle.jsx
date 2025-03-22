import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const dummyArticles = [
  {
    id: 1,
    title: 'Jaga Kualitas Nutrisi, Ini Rekomendasi Terbaik Pemberian ASI',
    date: '2025-01-10',
    image: 'http://localhost:5000/uploads/1741438295192.jpg',
    slug: 'rekomendasi-terbaik-asi',
    content: 'Menjaga kualitas nutrisi bagi bayi sangat penting. ASI merupakan makanan utama dan terbaik...'
  },
  {
    id: 2,
    title: 'Germas - Gerakan Masyarakat Hidup Sehat',
    date: '2025-10-10',
    image: 'http://localhost:5000/uploads/1741438295192.jpg',
    slug: 'germas-hidup-sehat',
    content: 'Germas adalah gerakan untuk meningkatkan kesehatan masyarakat dengan pola hidup sehat...'
  }
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const foundArticle = dummyArticles.find(a => a.slug === slug);
    setArticle(foundArticle);
    setRelatedArticles(dummyArticles.filter(a => a.slug !== slug));
  }, [slug]);

  if (!article) {
    return <div className="container mx-auto px-4 py-8 pt-24 md:pt-32">Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24 md:pt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{article.title}</h1>
        <p className="text-sm md:text-base text-gray-500 mb-3 md:mb-4">
          {new Date(article.date).toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}
        </p>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full rounded-lg mb-4 md:mb-6" 
        />
        <p className="text-base md:text-lg leading-relaxed">{article.content}</p>
      </div>
      
      {/* Related Articles Sidebar */}
      <div className="border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Artikel lainnya</h2>
        <div className="space-y-4">
          {relatedArticles.map(related => (
            <Link 
              to={`/artikel/${related.slug}`} 
              key={related.id} 
              className="block rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={related.image} 
                alt={related.title} 
                className="w-full h-24 md:h-32 object-cover" 
              />
              <div className="p-3">
                <h3 className="text-base md:text-lg font-semibold">{related.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {new Date(related.date).toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* "See More" button */}
        <div className="mt-6 flex items-center">
          <hr className="w-3/4 border-2 border-[#324F35]" />
          <button 
            onClick={() => navigate('/artikel')} 
            className="ml-2 flex items-center text-[#324F35] font-semibold text-base md:text-xl pb-1 hover:text-[#324F35] transition duration-300"
          >
            <span>Selengkapnya</span> <span className="ml-1">&gt;&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;