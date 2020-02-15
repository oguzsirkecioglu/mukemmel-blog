import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container bg">
    <Head>
            <title>Oğuz Sirkecioğlu | Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <p className="boss">OĞUZ SİRKECİOĞLU</p>
      
<h2 className="intro"> IE STUDENT / DEVELOPER </h2>
<hr className="cizgi"></hr>
      <div className="hero-social-links">

      
      <a className="social-link" href="https://www.instagram.com/oguzsirkecioglu">  <input type="image" className="twitter" src="https://img.icons8.com/plasticine/2x/linkedin.png" /></a>

        <a className="social-link" href="https://www.instagram.com/oguzsirkecioglu">  <input type="image" className="insta" src="https://cdn2.iconfinder.com/data/icons/instagram-classic/512/instagram-square-3d-512.png" /></a>

        <a className="social-link" href="https://www.instagram.com/oguzsirkecioglu">  <input type="image" className="twitterr" src="https://img.icons8.com/plasticine/2x/twitter.png" /></a>

      
      </div>
    </div>



    <style jsx>{`
      .bg{
        position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
  color:black;
      }
      .container {
        min-width: 700px;
        min-height: 700px;
        padding-top:110px;
        margin: 9px auto;
        color:white;
        background:black;
        margin: -1% auto ; 
        
        
      }
      .cizgi{
        border: 0.4pt solid grey;      
        width: 9%;
        margin-top:40px;
        
      }
      .intro{
        font-family: arial;
        font-size:13px;
        color: grey;
        padding-top: px;
        font-family: Lucida Grande;
      
        text-a
      }

      .hero {
        text-align: center;
        margin: 96px 0;
        max-height: 950px;
        
      }

      .social-link {
        margin-right: 8px;
        color:grey;
       

      }
      .twitter{
        padding-top:1px;
height:62px;
      }
.twitterr{
padding:px;
height:62px;
}
.insta{
  padding-top: 17px;
 padding:9px; 
height:42px;
}

      }
      .hero-social-links{
        padding-top:34px;
        
      }

      .boss {
        font-size: 26px;
        font-family: Lucida Grande;
        padding-top:1px;
        letter-spacing: 3.5px;
        
        

        }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://oguzsirkecioglu.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
