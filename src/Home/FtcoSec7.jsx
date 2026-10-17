import React from 'react';
import { useCart } from 'react-use-cart'; // استدعاء هوك السلة
import Swal from 'sweetalert2'; // استدعاء مكتبة التنبيهات

function FtcoSec7() {
  const { addItem } = useCart();

  // مصفوفة منتجات القهوة
  const coffeeProducts = [
    {
      id: 'c1',
      name: 'Coffee Capuccino 1',
      price: 5.90,
      img: 'images/menu-1.jpg',
      desc: 'A small river named Duden flows by their place and supplies',
    },
    {
      id: 'c2',
      name: 'Coffee Capuccino 2',
      price: 5.90,
      img: 'images/menu-2.jpg',
      desc: 'A small river named Duden flows by their place and supplies',
    },
    {
      id: 'c3',
      name: 'Coffee Capuccino 3',
      price: 5.90,
      img: 'images/menu-3.jpg',
      desc: 'A small river named Duden flows by their place and supplies',
    },
    {
      id: 'c4',
      name: 'Coffee Capuccino 4',
      price: 5.90,
      img: 'images/menu-4.jpg',
      desc: 'A small river named Duden flows by their place and supplies',
    },
  ];

  // دالة الإضافة مع تنبيه أنيق
  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
    });
Swal.fire({
  icon: 'success',
  title: 'Awesome!',
  text: `You have added to your cart!`,
  confirmButtonColor: '#0c924d',
  width: '300px',          // عرض مناسب ومستطيل
  padding: '1em',          // تقليص المساحات الداخلية عشان ما تبقاش طويلة
  showCloseButton: true,
  timer: 2000
});
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4 text-light">Best Coffee Sellers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          
          <div className="row">
            {coffeeProducts.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="menu-entry">
                  <a
                    href="#!"
                    className="img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="text text-center pt-4">
                    <h3>
                      <a href="#!">{item.name}</a>
                    </h3>
                    <p>{item.desc}</p>
                    <p className="price">
                      <span>${item.price.toFixed(2)}</span>
                    </p>
                    <p>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-primary btn-outline-dark border-0"
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FtcoSec7;