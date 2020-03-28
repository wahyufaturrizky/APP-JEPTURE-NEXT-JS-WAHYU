import React from 'react'
import Head from 'next/head'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Footer from './Footer'

export default ({ children, title }) => (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />

        {/* Favicon */}
	      <link rel="icon" href="../static/assets/img/stisla.ico"/>

        {/* Title Page */}
        <title>{title} &mdash; Stisla</title>
  
        {/* General CSS Files */}
        <link rel="stylesheet" href="../static/assets/modules/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../static/assets/modules/fontawesome/css/all.min.css" />
  
        {/* CSS Libraries */}
        <link rel="stylesheet" href="../static/assets/modules/jqvmap/dist/jqvmap.min.css" />
        <link rel="stylesheet" href="../static/assets/modules/summernote/summernote-bs4.css" />
        <link rel="stylesheet" href="../static/assets/modules/owlcarousel2/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="../static/assets/modules/owlcarousel2/dist/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="../static/assets/modules/jquery-selectric/selectric.css"/>
        <link rel="stylesheet" href="../static/assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"/>
  
        {/* Template CSS */}
        <link rel="stylesheet" href="../static/assets/css/style.css" />
        <link rel="stylesheet" href="../static/assets/css/components.css" />
  
        {/* Start GA */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-94034622-3" />
  
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'UA-94034622-3');`}}
        />
        {/* END GA */}
  
      </Head>

      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <Navbar />
          <SideBar />
          {children}
          <Footer />
        </div>
      </div>

        {/* General JS Scripts */}
        <script src="../static/assets/modules/jquery.min.js"></script>
        <script src="../static/assets/modules/popper.js"></script>
        <script src="../static/assets/modules/tooltip.js"></script>
        <script src="../static/assets/modules/bootstrap/js/bootstrap.min.js"></script>
        <script src="../static/assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
        <script src="../static/assets/modules/moment.min.js"></script>
        <script src="../static/assets/js/stisla.js"></script>

        {/* JS Libraies */}
        <script src="../static/assets/modules/jquery.sparkline.min.js"></script>
        <script src="../static/assets/modules/chart.min.js"></script>
        <script src="../static/assets/modules/owlcarousel2/dist/owl.carousel.min.js"></script>
        <script src="../static/assets/modules/summernote/summernote-bs4.js"></script>
        <script src="../static/assets/modules/chocolat/dist/js/jquery.chocolat.min.js"></script>
        <script src="../static/assets/modules/jquery-selectric/jquery.selectric.min.js"></script>
        <script src="../static/assets/modules/upload-preview/assets/js/jquery.uploadPreview.min.js"></script>
        <script src="../static/assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>

        {/* Page Specific JS File */}
        <script src="../static/assets/js/page/index.js"></script>
        <script src="../static/assets/js/page/features-posts.js"></script>
        <script src="../static/assets/js/page/features-post-create.js"></script>

        {/* Template JS File */}
        <script src="../static/assets/js/scripts.js"></script>
        <script src="../static/assets/js/custom.js"></script>

    </div>
)