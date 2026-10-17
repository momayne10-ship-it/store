import React, { useContext } from 'react'
import { useParams, Link } from 'react-router'
import AllCompo from '../Compo/AllCompo'
import { apiValue } from '../Data/AllData'
import { CartProvider, useCart } from 'react-use-cart'

function AllSingleProducts() {
  const { id } = useParams();
  const data = useContext(apiValue);
  const { addItem ,totalUniqueItems , totalItems , updateItemQuantity ,removeItem , cartTotal , emptyCart, isEmpty} = useCart();


// لو البيانات لسه بتحمل أو مش موجودة
  if (!data || data.length === 0) {
    return (
      <div>
        <AllCompo />
        <div className='container text-light text-center py-5'>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  // البحث عن المنتج المطابق للـ id القادم من الرابط
  const text = data.find((item) => item.id.toString() === id) || {};

  // مصفوفة الـ 4 صور الافتراضية

// مصفوفة الـ 4 صور الافتراضية مع تبطيط المسار بـ / في البداية
  const defaultImages = [
    "/images/menu-1.jpg",
    "/images/menu-2.jpg",
    "/images/menu-3.jpg",
    "/images/menu-4.jpg",
  ];

  // التحقق من صحة الصورة
  const isValidImage = text.image && text.image !== "" && text.image !== "string" && (text.image.startsWith("https") || text.image.startsWith("http") || text.image.startsWith("images/") || text.image.startsWith("/images/"));
  
  // استخدام الـ index الفعلي للمنتج في مصفوفة البيانات بدلاً من الـ id الكبير، أو استخدام رقم عشوائي/ثابت لو مش موجود
  const itemIndex = data.findIndex((item) => item.id.toString() === id);
  const fallbackIndex = itemIndex !== -1 ? itemIndex : 0;

  const productImage = isValidImage ? text.image : defaultImages[fallbackIndex % defaultImages.length];

  return (
    <CartProvider>
      <AllCompo />
      <br></br>
      <br></br>
      <br></br>
      
      <div className='container text-light py-5'>
        <div className='row align-items-center'>

          {/* صورة المنتج */}
          <div className='col-md-6 text-center mb-4'>
            <img 
              src={productImage} 
              className='w-75 rounded shadow' 
              alt={text.title || "Coffee"} 
              style={{ objectFit: 'cover', maxHeight: '400px' }}
            />


          </div>
          
          {/* تفاصيل المنتج */}
          <div className='col-md-6 text-center text-md-start mb-4'>
            <h4 className='mb-3 fw-bold'>Name: {text.title || "Delicious Coffee"}</h4>
            <h5 className='mt-3 text-secondary'>Description: {text.description || "Far far away, behind the word mountains..."}</h5>
            <h5 className='mt-3 text-white'>Ingredients: {text.ingredients || "Coffee beans, water, milk"}</h5>
            <h5 className='mt-3 text-warning fw-bold'>Price: $2.90</h5>
            <h6 className='mt-3 font-weightb text-light'>Id: {text.id}</h6>

            <div className='d-flex gap-3 mt-4 justify-content-center justify-content-md-start'>
            <button 
  onClick={() => addItem({
    ...text,
    id: text.id.toString(),
    price: 2.90
  })} 
  className='btn btn-primary px-4'
>
  Add to cart
</button>
              <Link to='/products' className='btn btn-dark px-4'>Back</Link>
            </div>
          </div> 

        </div>
      </div>
    </CartProvider>
  )
}

export default AllSingleProducts;