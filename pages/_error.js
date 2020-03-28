import React from 'react'
import Router from 'next/router'
import LayoutAuth from '../components/LayoutAuth'

const ErrorPage = () => {
  return (
    <LayoutAuth>
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="page-error">
              <div className="page-inner">
                <h1>404</h1>
                <div className="page-description">
                  The page you were looking for could not be found.
                </div>
                <button onClick={()=> Router.push('/index') } className="btn btn-primary btn-lg mt-5">
                  Back to Home
                </button>
              </div>
            </div>
            <div className="simple-footer mt-5">
              Copyright © Stisla 2018
            </div>
          </div>
        </section>
      </div>
    </LayoutAuth>
  )
}

export default ErrorPage;