import React from 'react'
import Head from 'next/head';
import { useState } from 'react';

import Navbar from '../components/navbar';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import Footer from '../components/footer';

const Home = () => {
  const [ count, setCount ] = useState(0); 

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </Head>

      <Navbar />
      
      <div className="home-page">
        <div className="container">
          <div onClick={increment} className="btn btn-primary">Increment Number</div>
          <div onClick={decrement} className="btn btn-primary">Decrement Number</div>
          <h1>{count}</h1>
          <div className="row">

            <div className="col-lg-3">

              <SideMenu
                appName={"Movie DB"} 
                clickHandler={() => {console.log('click')}}
                count={count} />
            </div>

            <div className="col-lg-9">
              <Carousel />

              <div className="row">
                <MovieList count={count} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }
      `}
      </style>
    </div>
  )
};

export default Home;
