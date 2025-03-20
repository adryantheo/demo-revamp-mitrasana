import tokopediaLogo from '../assets/Layer_1-2.svg'
import shopeeLogo from '../assets/shopee-1.svg'
import tiktokLogo from '../assets/Image 22@2x.png'

const dropdownConfig = {
    tentangKami: {
      categories: [
        { title: "Tentang Kami", descriptions: "Mitrasana, mitra kesehatan terpercaya dengan layanan apotek dan klinik yang mudah diakses", cta_link:"/tentang-kami", cta_text:"Lebih detail" }
      ],
      submenus: [
        { label: "Tentang Mitrasana", href: "#" },
        { label: "Visi & Misi", href: "#" }
      ]
    },
    produkLayanan: {
      categories: [
        { title: "Produk & Layanan", descriptions: "Solusi lengkap untuk kebutuhan kesehatan Anda, dari obat hingga layanan medis", cta_link:"/produk-layanan", cta_text:"Lebih detail" }
      ],
      submenus: [
        { label: "Apotek", href: "#" },
        { label: "Klinik", href: "#" },
        { label: "Kerjasama Perusahaan", href: "#" },
        { label: "Online Enabler", href: "#" },
      ]
    },
    tokoOnline: {
        categories: [
          { title: "Toko Online", descriptions: "Belanja produk kesehatan kini lebih praktis! Kunjungi toko online Mitrasana untuk mendapatkan obat, vitamin, dan kebutuhan kesehataan lainnya dengan mudah dan aman.", cta_link:"/toko-online", cta_text:"Lihat" }
        ],
        submenus: [
          { label: "Shopee", href: "#", icon_path:shopeeLogo },
          { label: "Tokopedia", href: "#", icon_path:tokopediaLogo },
          { label: "Tiktok Shop", href: "#", icon_path:tiktokLogo },
        ]
      }
  };
  
  export default dropdownConfig;
  