import React, { useContext, useState } from 'react'
import { CartProvider, useCart } from 'react-use-cart'
import AllCompo from '../Compo/AllCompo'
import Footer from '../Compo/Footer'
import { apiValue } from '../Data/AllData'
import { Link } from 'react-router'
import Swal from 'sweetalert2'



function Page(){

const data=useContext(apiValue);
const [search, setSearch] = useState("");

 const getValue = (event) => {
    setSearch(event.target.value);
  };

  const {addItem} = useCart();

  const  defultImages =[

    "images/menu-1.jpg",
    "images/menu-2.jpg",
    "images/menu-3.jpg",
    "images/menu-4.jpg",
    "images/menu-5.jpg",

  ];

// فلتر البحث اللي بيصفي المنتجات بناءً على اللي بيتكتب
const filteredData = data.filter((item) => {
    const query = search.trim();
    if (!query) return true; // لو خانة البحث فارغة، اعرض كل المنتجات

    // البحث بالمقارنة الدقيقة للـ ID (لو الـ query رقم) أو الاسم (لو نص)
    const matchesId = item.id.toString() === query;
    const matchesTitle = item.title && item.title.toLowerCase().includes(query.toLowerCase());

    return matchesId || matchesTitle;
  });
 
return(

 <div className="container">
        <div className="row">

          <div className="col-md-10 m-auto mt-5 mb-5 ">
           <input  
  onChange={getValue} 
  className="form-control mb-4 border-secondary" 
  placeholder="Search for coffee " 
  style={{ 
    backgroundColor: '#373839', 
    color: '#ffffff', 
    borderColor: '#6c757d' 
  }}
/>
          </div>

{filteredData.map((item , index)=>{

// بنشوف الصورة: لو موجودة ومش فاضية أو كلمة string بناخدها، لو مفيش بنختار صورة من defultImages بالدور
const isValidImage = item.image && item.image !== "" && item.image !== "string" && (item.image.startsWith("https") || item.image.startsWith("http") || item.image.startsWith("images/"));
  const coffeeImage = isValidImage ? item.image : defultImages[index % defultImages.length];


  //  معالجة العنوان والوصف لو كانوا فاضيين في الـ API
  const itemTitle = (item.title && item.title.trim() !== "") ? item.title : "Delicious Coffee";


return search== 0?(
   <div key={index} className="col-lg-4 col-md-6 text-center">
                    <div className="menu-wrap">
   <a
                  href="#"
                  className="menu-img img mb-4"
                  style={{ 
                backgroundImage: `url(${coffeeImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    display: 'block',
                    height: '300px',
                    margin: 'auto',
                  }}
          />
                      <div className="text">
                        <h3 className='text-light'>
                          {item.title}
                        </h3>
                        <p className='text-subheader'>
                    {item.ingredients}
                        </p>

                        <p className="price">
                          <span>$2.90</span>
                        </p>
                        <p className='font-weight-bold '>ID : {item.id}</p>
                        <p>
   <Link
  to={`/singleproduct/${item.id}`}
  className="btn btn-primary btn-outline-primary">
  Details
</Link>
                          
                 
{/* <button
  onClick={() => addItem({
    ...item,
    id: item.id.toString(),
    price: 2.90
  })}
  className="btn btn-primary ml-3 btn-outline-primary"
>
  Add to cart
</button> */}

<button
  onClick={() => {
    addItem({
      ...item,
      id: item.id.toString(),
      price: 2.90
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
  }}
  className="btn btn-primary ml-3 btn-outline-primary"
>
  Add to cart
</button>

                        </p>
                      </div>
                    </div>

                  </div>
): item.id == search ?(

  <div key={index} className="col-lg-4 col-md-6 text-center">
                    <div className="menu-wrap">
   <a
                  href="#"
                  className="menu-img img mb-4"
                  style={{ 
                backgroundImage: `url(${coffeeImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    display: 'block',
                    height: '300px',
                    margin: 'auto',
                  }}
          />
                      <div className="text">
                        <h3 className='text-light'>
                          {item.title}
                        </h3>
                        <p className='text-subheader'>
                    {item.ingredients}
                        </p>

                        <p className="price">
                          <span>$2.90</span>
                        </p>
                        <p className='font-weight-bold '>ID : {item.id}</p>
                        <p>
 <Link
  to={`/singleproduct/${item.id}`}
  className="btn btn-primary btn-outline-primary">
  Details
</Link>
                 
{/* <button

onClick={() => {
  addItem({
    ...item,
    id: item.id.toString(),
    price: 2.90
  });
}}
  className="btn btn-primary ml-3 btn-outline-primary">
  Add to cart
</button> */}

<button
  onClick={() => {
    addItem({
      ...item,
      id: item.id.toString(),
      price: 2.90
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
  }}
  className="btn btn-primary ml-3 btn-outline-primary"
>
  Add to cart
</button>

                        </p>
                      </div>
                    </div>

                  </div>

): item.title.toUpperCase().includes(search.toUpperCase())?(

  <div key={index} className="col-lg-4 col-md-6 text-center">
                    <div className="menu-wrap">
   <a
                  href="#"
                  className="menu-img img mb-4"
                  style={{ 
                backgroundImage: `url(${coffeeImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    display: 'block',
                    height: '300px',
                    margin: 'auto',
                  }}
          />
                      <div className="text">
                        <h3 className='text-light'>
                          {item.title}
                        </h3>
                        <p className='text-subheader'>
                    {item.ingredients}
                        </p>
                    

                        <p className="price">
                          <span>$2.90</span>
                        </p>
                        <p className='font-weight-bold '>ID : {item.id}</p>
                        <p>
<Link
  to={`/singleproduct/${item.id}`}
  className="btn btn-primary btn-outline-primary">
  Details
</Link>

  {/* <button
 
onClick={() => {
  addItem({
    ...item,
    id: item.id.toString(),
    price: 2.90
  });

}}

  className="btn btn-primary ml-3 btn-outline-primary"
>
  Add to cart
</button> */}
         
<button

  onClick={() => {
    addItem({
      ...item,
      id: item.id.toString(),
      price: 2.90
    });

   Swal.fire({
  icon: 'success',
  title: 'Awesome!',
  text: `You have added ${item.title || 'the item'} to your cart!`,
  confirmButtonColor: '#c19a6b',
  width: '300px',          // عرض مناسب ومستطيل
  padding: '1em',          // تقليص المساحات الداخلية عشان ما تبقاش طويلة
  showCloseButton: true,
  timer: 2000
});

  }}
  className="btn btn-primary ml-3 btn-outline-primary"
>
  Add to cart
</button>

                        </p>
                      </div>
                    </div>

                  </div>
): null

})}

          </div>
          </div>

)

}


function AllProducts() {
  return (
    <CartProvider>

<AllCompo/>
<Page/>

    </CartProvider>
  )
}

export default AllProducts