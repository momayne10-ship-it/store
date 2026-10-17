import React, { useState } from 'react';
import { useCart } from 'react-use-cart'; // استدعاء هوك السلة
import Swal from 'sweetalert2'; // استدعاء مكتبة التنبيهات

function MenuSec() {
  const { addItem } = useCart();

  // دالة الإضافة إلى السلة باستخدام بيانات المنتج المعروض
  const handleAddToCart = (name, price, img) => {
    // إنشاء معرف فريد مؤقت للمنتج بناءً على اسمه
    const id = name.toLowerCase().replace(/\s+/g, '-');

    addItem({
      id: id,
      name: name,
      price: price,
      image: img,
    });

    Swal.fire({
      icon: 'success',
      title: 'Awesome!',
      text: `You have added ${name} to your cart!`,
      confirmButtonColor: '#0c924d',
      width: '300px',
      padding: '1em',
      showCloseButton: true,
      timer: 2000
    });
  };

  return (
    <div>
      <section className="ftco-menu mb-5 pb-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row d-md-flex">
            <div className="col-lg-12 p-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav nav-pills justify-content-center"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-1-tab"
                      data-toggle="pill"
                      href="#v-pills-1"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                    >
                      Main Dish
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-2-tab"
                      data-toggle="pill"
                      href="#v-pills-2"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="false"
                    >
                      Drinks
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-3-tab"
                      data-toggle="pill"
                      href="#v-pills-3"
                      role="tab"
                      aria-controls="v-pills-3"
                      aria-selected="false"
                    >
                      Desserts
                    </a>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-content" id="v-pills-tabContent">
                    
                    {/* Main Dish Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-1.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 1</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 1", 2.90, "images/dish-1.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-2.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 2</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 2", 2.90, "images/dish-2.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-3.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 3</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 3", 2.90, "images/dish-3.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-4.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 4</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 4", 2.90, "images/dish-4.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-5.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 5</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 5", 2.90, "images/dish-5.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dish-6.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Grilled Beef 6</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Grilled Beef 6", 2.90, "images/dish-6.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Drinks Tab */}
                    <div
                      className="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-2-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-1.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Lemonade Juice 1</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Lemonade Juice 1", 2.90, "images/drink-1.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-2.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Pineapple Juice 1</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Pineapple Juice 1", 2.90, "images/drink-2.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-3.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Soda Drinks 1</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Soda Drinks 1", 2.90, "images/drink-3.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-4.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Lemonade Juice 2</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Lemonade Juice 2", 2.90, "images/drink-4.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-5.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Pineapple Juice 2</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Pineapple Juice 2", 2.90, "images/drink-5.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/drink-6.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Soda Drinks 2</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Soda Drinks 2", 2.90, "images/drink-6.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desserts Tab */}
                    <div
                      className="tab-pane fade"
                      id="v-pills-3"
                      role="tabpanel"
                      aria-labelledby="v-pills-3-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-1.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 1</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 1", 2.90, "images/dessert-1.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-2.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 2</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 2", 2.90, "images/dessert-2.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-3.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 3</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 3", 2.90, "images/dessert-3.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-4.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 4</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 4", 2.90, "images/dessert-4.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-5.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 5</a></h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 5", 2.90, "images/dessert-5.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#!"
                              className="menu-img img mb-4"
                              style={{ backgroundImage: "url(images/dessert-6.jpg)" }}
                            />
                            <div className="text">
                              <h3><a href="#!">Hot Cake Honey 6</a></h3>
                              <p>F
                                ar far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <p className="price"><span>$2.90</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart("Hot Cake Honey 6", 2.90, "images/dessert-6.jpg")}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuSec;