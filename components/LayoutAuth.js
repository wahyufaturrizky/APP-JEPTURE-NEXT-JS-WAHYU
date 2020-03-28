import React from 'react'
import Head from 'next/head'

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
        <link rel="stylesheet" href="../static/assets/modules/bootstrap-social/bootstrap-social.css" />
  
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

        {/* General JS Scripts */}
        <script src="../static/assets/modules/jquery.min.js"/>
        <script src="../static/assets/modules/popper.js"/>
        <script src="../static/assets/modules/tooltip.js"/>
        <script src="../static/assets/modules/bootstrap/js/bootstrap.min.js"/>
        <script src="../static/assets/modules/nicescroll/jquery.nicescroll.min.js"/>
        <script src="../static/assets/modules/moment.min.js"/>
        <script src="../static/assets/js/stisla.js"/>

        {/* JS Libraies */}

        {/* Page Specific JS File */}

        {/* Template JS File */}
        <script src="../static/assets/js/scripts.js"/>
        <script src="../static/assets/js/custom.js"/>
  
      </Head>

      {children}

        {/* General JS Scripts */}
        <script src="../static/assets/modules/jquery.min.js"/>
        <script src="../static/assets/modules/popper.js"/>
        <script src="../static/assets/modules/tooltip.js"/>
        <script src="../static/assets/modules/bootstrap/js/bootstrap.min.js"/>
        <script src="../static/assets/modules/nicescroll/jquery.nicescroll.min.js"/>
        <script src="../static/assets/modules/moment.min.js"/>
        <script src="../static/assets/js/stisla.js"/>

        {/* JS Libraies */}

        {/* Page Specific JS File */}

        {/* Template JS File */}
        <script src="../static/assets/js/scripts.js"/>
        <script src="../static/assets/js/custom.js"/>

    </div>
)